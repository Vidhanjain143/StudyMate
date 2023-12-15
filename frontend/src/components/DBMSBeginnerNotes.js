import React from 'react';
import './DBMSBeginnerNotes.css';

const DBMSBeginnerNotes = () => {
  return (
    <div className="dbms-beginner-notes">
      <div className="section section-1">
        <h1>DBMS & SQL NOTES</h1>
      </div>

      <div className="section section-2">
        <h3>Database:</h3>
        <p>
          A database is a collection of related data which represents some aspect of the real world. A database system is designed to be built and populated with data for a certain task. Database Management System (DBMS) is a software for storing and retrieving users' data while considering appropriate security measures. It consists of a group of programs which manipulate the database. The DBMS accepts the request for data from an application and instructs the operating system to provide the specific data. In large systems, a DBMS helps users and other third-party software to store and retrieve data.
        </p>
      </div>

      <div className="section section-3">
        <h3>Challenges of Typical File-processing Systems:</h3>
        <ul>
          <li>Data redundancy and inconsistency</li>
          <li>Difficulty in accessing data</li>
          <li>Data isolation – multiple files and formats</li>
          <li>Integrity problems</li>
          <li>Atomicity of updates</li>
          <li>Concurrent access by multiple users</li>
          <li>Security problems</li>
        </ul>
      </div>

      <div className="section section-4">
        <h3>ER diagram:</h3>
        <ul>
          <li>ER diagram or Entity Relationship diagram is a conceptual model that gives the graphical representation of the logical structure of the database.</li>
          <li>It shows all the constraints and relationships that exist among the different components.</li>
          <li>An ER diagram is mainly composed of following three components - Entity Sets, Attributes, and Relationship Set.</li>
          <li>Roll_no is a primary key that can identify each entity uniquely.</li>
          <li>Thus, by using a student's roll number, a student can be identified uniquely.</li>
        </ul>
      </div>

      <div className="section section-5">
        <h3>Entity Set:</h3>
        <p>
          An entity set is a set of the same type of entities.
        </p>
      </div>

      <div className="section section-6">
        <h3>Cardinality Constraint:</h3>
        <ul>
          <li>Cardinality constraint defines the maximum number of relationship instances in which an entity can participate.</li>
          <li>One-to-One Cardinality - An entity in set A can be associated with at most one entity in set B. An entity in set B can be associated with at most one entity in set A.</li>
          <li>One-to-Many Cardinality - An entity in set A can be associated with any number (zero or more) of entities in set B. An entity in set B can be associated with at most one entity in set A.</li>
          <li>Many-to-One Cardinality - An entity in set A can be associated with at most one entity in set B. An entity in set B can be associated with any number of entities in set A.</li>
          <li>Many-to-Many Cardinality - An entity in set A can be associated with any number (zero or more) of entities in set B. An entity in set B can be associated with any number (zero or more) of entities in set A.</li>
        </ul>
      </div>

      <div className="section section-7">
        <h3>Attributes:</h3>
        <ul>
          <li>Attributes are the descriptive properties which are owned by each entity of an Entity Set.</li>
          <li>Types of Attributes:</li>
          <li>Simple Attributes - Simple attributes are those attributes which cannot be divided further. Ex. Age</li>
          <li>Composite Attributes - Composite attributes are those attributes which are composed of many other simple attributes. Ex. Name, Address</li>
          <li>Multi Valued Attributes - Multi valued attributes are those attributes which can take more than one value for a given entity from an entity set. Ex. Mobile No, Email ID</li>
          <li>Derived Attributes - Derived attributes are those attributes which can be derived from other attribute(s). Ex. Age can be derived from DOB.</li>
          <li>Key Attributes - Key attributes are those attributes which can identify an entity uniquely in an entity set. Ex. Roll No.</li>
        </ul>
      </div>

      <div className="section section-8">
        <h3>Constraints:</h3>
        <ul>
          <li>Relational constraints are the restrictions imposed on the database contents and operations. They ensure the correctness of data in the database.</li>
          <li>Domain Constraint - Domain constraint defines the domain or set of values for an attribute. It specifies that the value taken by the attribute must be the atomic value from its domain.</li>
          <li>Tuple Uniqueness Constraint - Tuple Uniqueness constraint specifies that all the tuples must be necessarily unique in any relation.</li>
          <li>Key Constraint - All the values of the primary key must be unique. The value of the primary key must not be null.</li>
          <li>Entity Integrity Constraint - Entity integrity constraint specifies that no attribute of primary key must contain a null value in any relation.</li>
          <li>Referential Integrity Constraint - It specifies that all the values taken by the foreign key must either be available in the relation of the primary key or be null.</li>
        </ul>
      </div>

      <div className="section section-9">
        <h3>Closure of an Attribute Set:</h3>
        <p>
          The set of all those attributes which can be functionally determined from an attribute set is called a closure of that attribute set.
        </p>
      </div>

      <div className="section section-10">
        <h3>Keys:</h3>
        <ul>
          <li>Super Key - A superkey is a set of attributes that can identify each tuple uniquely in the given relation. A super key may consist of any number of attributes.</li>
          <li>Candidate Key - A set of minimal attribute(s) that can identify each tuple uniquely in the given relation is called a candidate key.</li>
          <li>Primary Key - A primary key is a candidate key that the database designer selects while designing the database. Primary Keys are unique and NOT NULL.</li>
          <li>Alternate Key - Candidate keys that are left unimplemented or unused after implementing the primary key are called as alternate keys.</li>
          <li>Foreign Key - An attribute ‘X’ is called as a foreign key to some other attribute ‘Y’ when its values are dependent on the values of attribute ‘Y’. The relation in which attribute ‘Y’ is present is called as the referenced relation. The relation in which attribute ‘X’ is present is called as the referencing relation.</li>
          <li>Composite Key - A primary key composed of multiple attributes and not just a single attribute is called a composite key.</li>
          <li>Unique Key - It is unique for all the records of the table. Once assigned, its value cannot be changed, i.e., it is non-updatable. It may have a NULL value.</li>
        </ul>
      </div>
    </div>
  );
};

export default DBMSBeginnerNotes;
