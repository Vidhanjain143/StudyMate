import React from 'react';
import './DBMSBeginnerNotes.css';

const DBMSAdvanced = () => {
  return (
    <div className="dbms-beginner-notes">
      <div className="section section-1">
        <h4>Functional Dependency:</h4>
        <p>
          In any relation, a functional dependency α → β holds if- Two tuples having the same value of attribute α also have the same value for attribute β.
        </p>
      </div>

      <div className="section section-2">
        <h4>Types of Functional Dependency:</h4>
        <ul>
          <li>Trivial Functional Dependencies –</li>
          <li>Non-Trivial Functional Dependencies –</li>
        </ul>
      </div>

      <div className="section section-3">
        <h4>Decomposition of a Relation:</h4>
        <p>
          The process of breaking up or dividing a single relation into two or more sub-relations is called the decomposition of a relation.
        </p>
      </div>

      <div className="section section-4">
        <h4>Properties of Decomposition:</h4>
        <ul>
          <li>Lossless Decomposition -</li>
          <li>Dependency Preservation -</li>
        </ul>
      </div>

      <div className="section section-5">
        <h4>Types of Decomposition:</h4>
        <ul>
          <li>Lossless Join Decomposition:</li>
          <li>Lossy Join Decomposition:</li>
        </ul>
      </div>

      <div className="section section-6">
        <h4>Normalization:</h4>
        <p>
          In DBMS, database normalization is a process of making the database consistent by reducing redundancies and ensuring the integrity of data through lossless decomposition.
        </p>
      </div>

      <div className="section section-7">
        <h4>Normal Forms:</h4>
        <ul>
          <li>First Normal Form (1NF) -</li>
          <li>Second Normal Form (2NF) -</li>
          <li>Third Normal Form (3NF) -</li>
          <li>Boyce-Codd Normal Form -</li>
        </ul>
      </div>

      <div className="section section-8">
        <h4>Transaction:</h4>
        <p>
          Transaction is a single logical unit of work formed by a set of operations.
        </p>
      </div>

      <div className="section section-9">
        <h4>Operations in Transaction:</h4>
        <ul>
          <li>Read Operation -</li>
          <li>Write Operation –</li>
        </ul>
      </div>

      <div className="section section-10">
        <h4>Transaction States:</h4>
        <ul>
          <li>Active State –</li>
          <li>Partially Committed State –</li>
          <li>Committed State –</li>
          <li>Failed State –</li>
          <li>Aborted State –</li>
          <li>Terminated State –</li>
        </ul>
      </div>

      <div className="section section-11">
        <h4>ACID Properties:</h4>
        <p>
          To ensure the consistency of the database, certain properties are followed by all the transactions
        </p>
      </div>
    </div>
  );
};

export default DBMSAdvanced;
