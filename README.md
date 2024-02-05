# Web Worker Application

This web application demonstrates the use of Web Workers to enhance performance in heavy data processing tasks. It includes buttons to calculate the sum of a large number of integers both with and without Web Workers, along with buttons to toggle the background color of the webpage.

## Table of Contents
- [Demo](#demo)
- [Documentation](#documentation)
  - [Description](#description)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Performance Findings](#performance-findings)
  - [Challenges and Solutions](#challenges-and-solutions)
  - [References/Resources](#referencesresources)

## Demo

[Live Demo](https://hamadhassan.github.io/Web-Worker-Application/)

## Documentation

### Description

The project is a web application that showcases the benefits of using Web Workers for background tasks. Users can compare the processing times of heavy computations both with and without Web Workers, providing insights into the performance improvements achieved.

### Getting Started

#### Prerequisites

- Web browser (Chrome, Firefox, or Safari recommended)

#### Installation

1. **Clone the repository to your local machine:**

    ```bash
    git clone https://github.com/hamadhassan/Web-Worker-Application.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Web-Worker-Application
    ```

3. **Open the `index.html` file in your preferred web browser.**

### Usage

1. Upon opening the application, you will find buttons to calculate the sum of a large number of integers both with and without Web Workers.

2. Click the "Calculate Sum Without Worker" button to see the processing time and result without using Web Workers.

3. Click the "Calculate Sum With Worker" button to observe the processing time and result when Web Workers are utilized.

4. Toggle the background color using the provided buttons to demonstrate the responsiveness of the UI during heavy computations.

### Performance Findings

The application clearly demonstrates improved performance when utilizing Web Workers for computationally intensive tasks. Users can observe faster processing times and a more responsive user interface, especially evident when calculating the sum of a large number of integers.

### Challenges and Solutions

1. **Scoping Issue with `startTime`:**
   - **Challenge:** The `startTime` variable was not correctly scoped, causing issues with processing time calculations.
   - **Solution:** Declared the `startTime` variable outside of the event listener to ensure proper scoping.

2. **Proper Use of Web Workers:**
   - **Challenge:** Ensuring effective and appropriate use of Web Workers for background tasks.
   - **Solution:** Created separate scripts for the main application logic and the Web Worker, using proper communication between them.

### References/Resources

- [MDN Web Docs: Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [W3C Web Workers Specification](https://www.w3.org/TR/workers/)
- [HTML Living Standard - Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
