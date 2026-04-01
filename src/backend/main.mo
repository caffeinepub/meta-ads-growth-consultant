import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";

actor {
  type SubmissionId = Nat;
  type Submission = {
    id : SubmissionId;
    fullName : Text;
    businessEmail : Text;
    company : Text;
    website : Text;
    monthlyAdSpend : Text;
    biggestProblem : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Submission {
    public func compare(a : Submission, b : Submission) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  let submissions = Map.empty<SubmissionId, Submission>();
  var nextId = 0;

  public shared ({ caller }) func submitAuditForm(
    fullName : Text,
    businessEmail : Text,
    company : Text,
    website : Text,
    monthlyAdSpend : Text,
    biggestProblem : Text,
    message : Text,
  ) : async SubmissionId {
    let id = nextId;
    let timestamp = Time.now();

    let submission : Submission = {
      id;
      fullName;
      businessEmail;
      company;
      website;
      monthlyAdSpend;
      biggestProblem;
      message;
      timestamp;
    };

    submissions.add(id, submission);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort();
  };

  public query ({ caller }) func getSubmission(id : SubmissionId) : async Submission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };
};
