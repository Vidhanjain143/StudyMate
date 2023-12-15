import React from 'react';
import './DBMSBeginnerNotes.css'; // Make sure to import the CSS file

const OSBeginnerNotes = () => {
  return (
    <div className="dbms-beginner-notes">
      <div className="section section-1">
        <h4>Operating Systems</h4>
        <p>
          An Operating System can be defined as an interface between the user and
          hardware. It is responsible for the execution of all the processes, resource
          allocation, CPU management, file management, and many other tasks. The purpose
          of an operating system is to provide an environment in which a user can execute
          programs in a convenient and efficient manner.
        </p>
      </div>

      <div className="section section-2">
        <h4>Types of Operating Systems</h4>
        <p>
          1. Batch OS – A set of similar jobs are stored in the main memory for
          execution. A job gets assigned to the CPU, only when the execution of the
          previous job completes.
        </p>
        <p>
          2. Multiprogramming OS – The main memory consists of jobs waiting for CPU
          time. The OS selects one of the processes and assigns it to the CPU.
          Whenever the executing process needs to wait for any other operation (like
          I/O), the OS selects another process from the job queue and assigns it to the
          CPU. This way, the CPU is never kept idle and the user gets the flavor of
          getting multiple tasks done at once.
        </p>
      </div>

      <div className="section section-3">
        <h4>Multitasking OS</h4>
        <p>
          Multitasking OS combines the benefits of Multiprogramming OS and CPU scheduling
          to perform quick switches between jobs. The switch is so quick that the user can
          interact with each program as it runs.
        </p>
      </div>

      <div className="section section-4">
        <h4>Time Sharing OS</h4>
        <p>
          Time-sharing systems require interaction with the user to instruct
          the OS to perform various tasks. The OS responds with an output. The
          instructions are usually given through an input device like the keyboard.
        </p>
      </div>

      <div className="section section-5">
        <h4>Real Time OS</h4>
        <p>
          Real-Time OS are usually built for dedicated systems to accomplish a specific set
          of tasks within deadlines.
        </p>
      </div>

      <div className="section section-6">
        <h4>Process</h4>
        <p>
          A process is a program under execution. The value of the program counter (PC)
          indicates the address of the next instruction of the process being executed.
          Each process is represented by a Process Control Block (PCB).
        </p>
      </div>

      <div className="section section-7">
        <h4>Process Scheduling</h4>
        <p>
          1. Arrival Time – Time at which the process arrives in the ready queue.
        </p>
        <p>
          2. Completion Time – Time at which process completes its execution.
        </p>
        <p>
          3. Burst Time – Time required by a process for CPU execution.
        </p>
      </div>

      <div className="section section-8">
        <h4>Turn Around Time</h4>
        <p>
          Turn Around Time = Completion Time - Arrival Time
        </p>
      </div>

      <div className="section section-9">
        <h4>Waiting Time (WT)</h4>
        <p>
          Waiting Time = Turnaround Time - Burst Time
        </p>
      </div>

      <div className="section section-10">
        <h4>Thread (Important)</h4>
        <p>
          A thread is a lightweight process and forms the basic unit of CPU utilization. A process can perform more than one task at the same time by including multiple threads.
        </p>
        <p>
          A thread has its own program counter, register set, and stack.
        </p>
        <p>
          A thread shares resources with other threads of the same process: the code section, the data section, files, and signals.
        </p>
      </div>

      {/* Other sections go here */}
    </div>
  );
};

export default OSBeginnerNotes;
