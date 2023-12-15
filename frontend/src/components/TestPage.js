import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TestPage.css';
const questionsData = [
    // DBMS Questions (Beginner)
    {
      id: 1,
      questionText: "What is DBMS?",
      choices: ["A. Database Management System", "B. Data Backup and Migration System", "C. Data Business Management System", "D. Dynamic Base Management System"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "beginner",
    },
    {
      id: 2,
      questionText: "What is a primary key in a database?",
      choices: ["A. A unique identifier for a record in a table", "B. A reserved keyword in SQL", "C. A data type for storing text", "D. An index on all columns"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "beginner",
    },
    {
      id: 3,
      questionText: "What is normalization in the context of a database?",
      choices: ["A. Reducing data redundancy and improving data integrity", "B. Increasing data redundancy", "C. Randomly arranging data", "D. Creating backup copies of data"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "beginner",
    },
    {
      id: 4,
      questionText: "What does SQL stand for?",
      choices: ["A. Structured Query Language", "B. Simple Query Language", "C. Structured Question Language", "D. Standard Query Language"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "beginner",
    },
    {
      id: 5,
      questionText: "Which SQL keyword is used to retrieve data from a database?",
      choices: ["A. SELECT", "B. RETRIEVE", "C. FETCH", "D. QUERY"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "beginner",
    },
    {
      id: 6,
      questionText: "What is an SQL JOIN clause used for?",
      choices: ["A. Combining rows from two or more tables", "B. Sorting rows in a table", "C. Deleting rows from a table", "D. Updating rows in a table"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "beginner",
    },
    {
      id: 7,
      questionText: "Which type of database stores data in a tabular form with rows and columns?",
      choices: ["A. Relational database", "B. NoSQL database", "C. Hierarchical database", "D. Object-oriented database"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "beginner",
    },
    {
      id: 8,
      questionText: "What is the primary role of a database administrator (DBA)?",
      choices: ["A. Managing and maintaining the database system", "B. Designing user interfaces", "C. Writing code for applications", "D. Monitoring network security"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "beginner",
    },
    {
      id: 9,
      questionText: "What is the purpose of the GROUP BY clause in SQL?",
      choices: ["A. Grouping rows that have the same values into summary rows", "B. Sorting rows in a table", "C. Joining two tables", "D. Deleting rows from a table"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "beginner",
    },
    {
      id: 10,
      questionText: "Which type of index is used to improve the efficiency of data retrieval in a database?",
      choices: ["A. B-tree index", "B. Primary key index", "C. Foreign key index", "D. Hash index"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "beginner",
    },
  
    // DBMS Questions (Intermediate)
    {
      id: 11,
      questionText: "What is the purpose of the HAVING clause in SQL?",
      choices: ["A. Filtering the results of a GROUP BY query", "B. Sorting rows in a table", "C. Joining two tables", "D. Deleting rows from a table"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "intermediate",
    },
    {
      id: 12,
      questionText: "What is a database transaction?",
      choices: ["A. A sequence of one or more SQL statements", "B. A user's login session to a database", "C. A database backup process", "D. A database schema"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "intermediate",
    },
    {
      id: 13,
      questionText: "What is the purpose of the SQL UNION operator?",
      choices: ["A. Combining the result sets of two or more SELECT statements", "B. Updating rows in a table", "C. Sorting rows in a table", "D. Deleting rows from a table"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "intermediate",
    },
    {
      id: 14,
      questionText: "What is a database trigger?",
      choices: ["A. A database event that initiates an action", "B. A table used for storing triggers", "C. A type of database index", "D. A database backup process"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "intermediate",
    },
    {
      id: 15,
      questionText: "What is a database schema?",
      choices: ["A. A logical container for database objects", "B. A database backup file", "C. A primary key in a table", "D. A database trigger"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "intermediate",
    },
    {
      id: 16,
      questionText: "What is data integrity in a database?",
      choices: ["A. Ensuring data accuracy and consistency", "B. Backing up data", "C. Protecting data from unauthorized access", "D. Sorting data in a table"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "intermediate",
    },
    {
      id: 17,
      questionText: "What is a SQL view?",
      choices: ["A. A virtual table based on the result of an SQL statement", "B. A physical table", "C. A database trigger", "D. A database schema"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "intermediate",
    },
    {
      id: 18,
      questionText: "What is an SQL subquery?",
      choices: ["A. A query nested within another query", "B. An SQL join operation", "C. A type of SQL function", "D. A database backup process"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "intermediate",
    },
    {
      id: 19,
      questionText: "What is ACID in the context of database transactions?",
      choices: ["A. A set of properties that guarantee reliable processing of database transactions", "B. A type of database index", "C. A database schema", "D. A database event"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "intermediate",
    },
    {
      id: 20,
      questionText: "What is a SQL stored procedure?",
      choices: ["A. A precompiled collection of one or more SQL statements", "B. A database trigger", "C. A database schema", "D. A database event"],
      correctAnswer: "A",
      subject: "dbms",
      difficulty: "intermediate",
    },
  
    // OS Questions (Beginner)
    {
      id: 21,
      questionText: "What is an operating system?",
      choices: ["A. A hardware component", "B. System software that manages computer hardware", "C. A type of computer", "D. An application software"],
      correctAnswer: "B",
      subject: "os",
      difficulty: "beginner",
    },
    {
      id: 22,
      questionText: "Which operating system is not a Linux distribution?",
      choices: ["A. Ubuntu", "B. CentOS", "C. Windows", "D. Fedora"],
      correctAnswer: "C",
      subject: "os",
      difficulty: "beginner",
    },
    {
      id: 23,
      questionText: "What does RAM stand for?",
      choices: ["A. Random Access Memory", "B. Read-Only Memory", "C. Run All Memory", "D. Rapid Access Module"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "beginner",
    },
    {
      id: 24,
      questionText: "What is the function of an operating system's kernel?",
      choices: ["A. Managing hardware resources", "B. Running user applications", "C. Displaying graphics", "D. Processing user input"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "beginner",
    },
    {
      id: 25,
      questionText: "What is a file system in an operating system?",
      choices: ["A. A method for organizing and storing files on a storage device", "B. A software that plays media files", "C. A part of RAM", "D. A type of CPU"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "beginner",
    },
    {
      id: 26,
      questionText: "What is a process in the context of operating systems?",
      choices: ["A. An instance of a program in execution", "B. A file on a hard drive", "C. A type of memory", "D. A hardware component"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "beginner",
    },
    {
      id: 27,
      questionText: "What is multitasking in operating systems?",
      choices: ["A. Running multiple processes simultaneously", "B. Switching between different file systems", "C. Managing RAM", "D. Storing data on multiple hard drives"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "beginner",
    },
    {
      id: 28,
      questionText: "What is an operating system's shell?",
      choices: ["A. A user interface for interacting with the OS", "B. A protective layer around the OS", "C. A type of memory", "D. A hardware component"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "beginner",
    },
    {
      id: 29,
      questionText: "What is a device driver in an operating system?",
      choices: ["A. Software that communicates with hardware devices", "B. A type of memory", "C. A network protocol", "D. A file format"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "beginner",
    },
    {
      id: 30,
      questionText: "What is virtual memory in operating systems?",
      choices: ["A. Using disk space as an extension of RAM", "B. A type of CPU", "C. A method for running virtual machines", "D. A network protocol"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "beginner",
    },
  
    // OS Questions (Intermediate)
    {
      id: 31,
      questionText: "What is the boot process in an operating system?",
      choices: ["A. The initial set of operations that loads the OS into memory", "B. The process of creating a backup of the OS", "C. A type of CPU", "D. A network protocol"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "intermediate",
    },
    {
      id: 32,
      questionText: "What is a page file in the context of virtual memory?",
      choices: ["A. A file used for swapping data between RAM and disk", "B. A page on the internet", "C. A type of CPU", "D. A network protocol"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "intermediate",
    },
    {
      id: 33,
      questionText: "What is kernel panic in the context of Unix-like operating systems?",
      choices: ["A. A critical error that causes the system to halt", "B. A type of shell script", "C. A type of memory", "D. A network protocol"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "intermediate",
    },
    {
      id: 34,
      questionText: "What is the purpose of an operating system's file permissions?",
      choices: ["A. Controlling access to files and directories", "B. Sorting files in alphabetical order", "C. Managing file backups", "D. A type of CPU"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "intermediate",
    },
    {
      id: 35,
      questionText: "What is RAID in the context of storage systems?",
      choices: ["A. Redundant Array of Independent Disks", "B. A type of file system", "C. A network protocol", "D. A file format"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "intermediate",
    },
    {
      id: 36,
      questionText: "What is the purpose of an operating system's scheduler?",
      choices: ["A. Managing the execution of processes", "B. Managing file backups", "C. A type of memory", "D. A network protocol"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "intermediate",
    },
    {
      id: 37,
      questionText: "What is a system call in operating systems?",
      choices: ["A. An interface for interacting with the kernel", "B. A protective layer around the OS", "C. A type of memory", "D. A hardware component"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "intermediate",
    },
    {
      id: 38,
      questionText: "What is the purpose of an operating system's file system?",
      choices: ["A. Managing files and directories on storage devices", "B. Running user applications", "C. A network protocol", "D. A file format"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "intermediate",
    },
    {
      id: 39,
      questionText: "What is a deadlock in the context of operating systems?",
      choices: ["A. A situation where two or more processes cannot proceed", "B. A type of shell script", "C. A type of memory", "D. A hardware component"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "intermediate",
    },
    {
      id: 40,
      questionText: "What is a file descriptor in Unix-like operating systems?",
      choices: ["A. An abstract indicator for a file or I/O resource", "B. A file on the internet", "C. A type of CPU", "D. A network protocol"],
      correctAnswer: "A",
      subject: "os",
      difficulty: "intermediate",
    },
  
    // Networking Questions (Beginner)
    {
      id: 41,
      questionText: "What is networking?",
      choices: ["A. Connecting computers and other devices to share resources", "B. A type of operating system", "C. A file format", "D. A network protocol"],
      correctAnswer: "A",
      subject: "networking",
      difficulty: "beginner",
    },
    {
      id: 42,
      questionText: "What is the OSI model?",
      choices: ["A. A conceptual framework for understanding network communication", "B. A type of CPU", "C. A method for managing storage devices", "D. A file format"],
      correctAnswer: "A",
      subject: "networking",
      difficulty: "beginner",
    },
    {
      id: 43,
      questionText: "How many sides does a triangle have?",
      choices: ["A. 2", "B. 3", "C. 4", "D. 5"],
      correctAnswer: "B",
      subject: "aptitude",
      difficulty: "beginner",
    },
    // ... Add more aptitude beginner questions
  // Advanced DBMS Questions
{
    id: 89,
    questionText: "What is a database index and why is it important?",
    choices: [
      "A. A data structure that improves the speed of data retrieval",
      "B. A unique identifier for a database table",
      "C. A type of database constraint",
      "D. A file format for database storage",
    ],
    correctAnswer: "A",
    subject: "dbms",
    difficulty: "advanced",
  },
  {
    id: 90,
    questionText: "What is the ACID property in database transactions?",
    choices: [
      "A. A set of properties that guarantee reliable processing of database transactions",
      "B. A type of database constraint",
      "C. A method for data encryption",
      "D. A database schema",
    ],
    correctAnswer: "A",
    subject: "dbms",
    difficulty: "advanced",
  },
  {
    id: 91,
    questionText: "What is a SQL injection and how can it be prevented?",
    choices: [
      "A. A code injection technique that exploits vulnerabilities in SQL queries",
      "B. A type of database backup",
      "C. A database schema",
      "D. A hardware component",
    ],
    correctAnswer: "A",
    subject: "dbms",
    difficulty: "advanced",
  },
  {
    id: 92,
    questionText: "What is a NoSQL database and when is it used?",
    choices: [
      "A. A type of database that doesn't use traditional SQL for queries",
      "B. A type of operating system",
      "C. A method for data compression",
      "D. A type of CPU",
    ],
    correctAnswer: "A",
    subject: "dbms",
    difficulty: "advanced",
  },
  {
    id: 93,
    questionText: "What is database sharding and how does it improve performance?",
    choices: [
      "A. Dividing a database into smaller, more manageable parts",
      "B. A type of CPU architecture",
      "C. A method for database replication",
      "D. A network protocol",
    ],
    correctAnswer: "A",
    subject: "dbms",
    difficulty: "advanced",
  },
  
  // Advanced OS Questions
  {
    id: 46,
    questionText: "What is real-time operating system (RTOS) and where is it used?",
    choices: [
      "A. An operating system designed for time-critical applications",
      "B. A type of file system",
      "C. A network protocol",
      "D. A file format",
    ],
    correctAnswer: "A",
    subject: "os",
    difficulty: "advanced",
  },
  {
    id: 47,
    questionText: "What is process synchronization and why is it important in multi-threading?",
    choices: [
      "A. Managing access to shared resources among multiple threads",
      "B. A type of CPU",
      "C. A method for file compression",
      "D. A hardware component",
    ],
    correctAnswer: "A",
    subject: "os",
    difficulty: "advanced",
  },
  {
    id: 48,
    questionText: "What is virtualization in operating systems, and how does it work?",
    choices: [
      "A. Running multiple virtual instances of an OS on a single physical machine",
      "B. A type of shell script",
      "C. A method for data storage",
      "D. A network protocol",
    ],
    correctAnswer: "A",
    subject: "os",
    difficulty: "advanced",
  },
  {
    id: 49,
    questionText: "What is a system call and how is it handled by the operating system?",
    choices: [
      "A. An interface for requesting services from the OS kernel",
      "B. A protective layer around the OS",
      "C. A method for data encryption",
      "D. A type of memory",
    ],
    correctAnswer: "A",
    subject: "os",
    difficulty: "advanced",
  },
  {
    id: 50,
    questionText: "What is an operating system's page replacement algorithm, and why is it important?",
    choices: [
      "A. A method for choosing which pages to remove from RAM when space is needed",
      "B. A type of memory",
      "C. A method for data compression",
      "D. A type of CPU architecture",
    ],
    correctAnswer: "A",
    subject: "os",
    difficulty: "advanced",
  },
  
  // Advanced Networking Questions
  {
    id: 51,
    questionText: "What is a subnet in IP addressing, and how does it affect network design?",
    choices: [
      "A. A division of an IP network into smaller, manageable segments",
      "B. A method for network cable management",
      "C. A method for data encryption",
      "D. A network protocol",
    ],
    correctAnswer: "A",
    subject: "networking",
    difficulty: "advanced",
  },
  {
    id: 52,
    questionText: "What is Quality of Service (QoS) in networking, and why is it important?",
    choices: [
      "A. A set of technologies that manage network resources and ensure good service quality",
      "B. A type of operating system",
      "C. A method for data storage",
      "D. A file format",
    ],
    correctAnswer: "A",
    subject: "networking",
    difficulty: "advanced",
  },
  {
    id: 53,
    questionText: "What is a router in networking, and how does it route traffic between networks?",
    choices: [
      "A. A networking device that forwards data packets between different networks",
      "B. A type of CPU",
      "C. A network protocol",
      "D. A hardware component",
    ],
    correctAnswer: "A",
    subject: "networking",
    difficulty: "advanced",
  },
  {
    id: 54,
    questionText: "What is the purpose of a firewall in network security?",
    choices: [
      "A. Protecting a network by controlling incoming and outgoing network traffic",
      "B. A type of file system",
      "C. A type of CPU architecture",
      "D. A file format",
    ],
    correctAnswer: "A",
    subject: "networking",
    difficulty: "advanced",
  },
  {
    id: 55,
    questionText: "What is a VPN and how does it secure network communications?",
    choices: [
      "A. A virtual private network that encrypts data over the internet",
      "B. A type of database constraint",
      "C. A method for file compression",
      "D. A network protocol",
    ],
    correctAnswer: "A",
    subject: "networking",
    difficulty: "advanced",
  }
  
    // Add more questions for each subject and difficulty as needed
  ];
  
  
const TestPage = () => {
  const { subject, difficulty } = useParams();

  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    const filteredQuestions = questionsData.filter(
      (question) => question.subject === subject && question.difficulty === difficulty
    );

    setQuestions(filteredQuestions);
  }, [subject, difficulty]);

  const handleAnswerChange = (questionIndex, choiceIndex) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: choiceIndex,
    }));
  };

  const handleSubmitAnswers = () => {
    let currentScore = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswerIndex) {
        currentScore++;
      }
    });

    setScore(currentScore);
  };

  

      
        return (
          <div className="test-page">
            <h1>{subject} Test ({difficulty})</h1>
            <hr className="divider" />
            <ul className="question-list">
              {questions.map((question, questionIndex) => (
                <li key={questionIndex} className="question">
                  <p>{question.questionText}</p>
                  <ul className="choices">
                    {question.choices.map((choice, choiceIndex) => (
                      <li key={choiceIndex}>
                        <label>
                          <input
                            type="radio"
                            name={`question${questionIndex}`}
                            value={choice}
                            checked={selectedAnswers[questionIndex] === choiceIndex}
                            onChange={() => handleAnswerChange(questionIndex, choiceIndex)}
                          />
                          {choice}
                        </label>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <button className="submit-button" onClick={handleSubmitAnswers}>
              Submit Answers
            </button>
            <button className="submit-button" onClick={handleSubmitAnswers}>
              Retake Test
            </button>
            <p className="score">Score: {score} out of {questions.length}</p>
          </div>
  );
};

export default TestPage;
