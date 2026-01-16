# 📌 Today’s Topics Covered (React JS)
📅 Date: 16 January 2026
# React Routing with React Router DOM

## 📘 Today’s Topic
Today we learned how to use **React Router DOM** to create routing in a React application and navigate between different pages/components using a **Navbar**.

---

## 🔹 What is React Router DOM?
React Router DOM is a library that allows us to create **single-page applications (SPA)** with navigation without reloading the page.

---

## 🔹 Topics Covered
- What is routing in React
- Installing React Router DOM
- Creating routes
- Creating pages/components (Home, About, Contact)
- Navigating between pages using a Navbar

---

## 🔹 Installation
Install React Router DOM using npm:

```bash
npm install react-router-dom

# React useRef Hook

## 📅 Date
📅 Date: 14 January 2026

---

## 📘 Topic: useRef

Today we learned about the **useRef hook** in React, how to use it, and how it can replace `document.getElementById`.

---

## 🔹 What is useRef?
`useRef` is a React Hook that allows you to:
- Access DOM elements directly
- Store mutable values without re-rendering
- Avoid using `document.getElementById`

---

## 🔹 Why use useRef?
❌ Problem with `document.getElementById`:
- Breaks React’s virtual DOM concept
- Not recommended in React
- Causes unmanaged DOM access

✅ Solution:
- `useRef` provides a **React-friendly** way to access DOM elements

---

## 🔹 Syntax
```jsx
const refName = useRef(initialValue);

# React Form + API + useEffect Example

## 📅 Date
📅 Date: 12 and 15 January 2026

---

## 📘 Project Description
This React project demonstrates:
- Form data handling
- API data fetching using `fetch`
- Combining **Form Data + API Data**
- Table binding with dynamic data
- All three types of `useEffect`

---

## 🧩 Components Overview
- `Form.jsx`
- `GetApi.jsx`
- `TableBind.jsx`
- `DataUseEffect.jsx`

---

## 🔹 Form Component (`Form.jsx`)

### ✅ Features
- Takes user input (Name, Address, Phone)
- Stores data as an **array of objects**
- Passes form data to API component using props

### 🔑 Concepts Used
- `useState`
- Uncontrolled inputs
- Props

### 💻 Code
```jsx
import React, { useState } from 'react'
import GetApi from './GetApi'

export default function Form() {
  let [UserData, setUserData] = useState([])

  function SaveData() {
    let UserName = document.getElementById("Name").value
    let UserAddress = document.getElementById("Address").value
    let UserPhone = document.getElementById("Phone").value

    let Obj = {
      Name: UserName,
      Phone: UserPhone,
      Address: UserAddress
    }

    setUserData([...UserData, Obj])
  }

  return (
    <div>
      <div className='border p-3 m-auto my-3 rounded d-flex flex-column' style={{ width: "30rem" }}>
        <input className='form-control mb-2' type="text" placeholder='Name' id="Name" />
        <input className='form-control mb-2' type="text" placeholder='Address' id="Address" />
        <input className='form-control mb-2' type="number" placeholder='Phone' id="Phone" />
        <button className='btn btn-success' onClick={SaveData}>Save</button>
      </div>

      <GetApi MyData={UserData} />
    </div>
  )
}
🔹 API Component (GetApi.jsx)
✅ Features

Fetches data from API

Merges API data with form data

Sends combined data to table component

🌐 API Used
https://jsonplaceholder.typicode.com/users

🔑 useEffect Logic

Runs on page load

Runs again when form data changes

💻 Code
import React, { useEffect, useState } from 'react'
import TableBind from './TableBind'

export default function GetApi(props) {
  let [UserData, setUserData] = useState([])

  async function GetMyApi() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let result = await response.json()
    setUserData([...props.MyData, ...result])
  }

  useEffect(() => {
    GetMyApi()
  }, [props.MyData])

  return (
    <div>
      <TableBind Data={UserData} />
    </div>
  )
}

🔹 Table Component (TableBind.jsx)
✅ Features

Displays Form + API data together

Uses Bootstrap table

Handles different object key names

💻 Code
import React from 'react'

export default function TableBind(props) {
  return (
    <div>
      <table className='table table-bordered table-dark table-hover table-striped'>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            props.Data.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.Name || value.name}</td>
                <td>{value.Address || value.address.city}</td>
                <td>{value.Phone || value.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

🔹 useEffect Examples (DataUseEffect.jsx)
🎯 Purpose

Demonstrates:

useEffect without dependency

useEffect with dependency

useEffect with empty array

💻 Code
import React, { useEffect, useState } from 'react'

export default function DataUseEffect() {
  let [count, setCount] = useState(0)
  let [count2, setCount2] = useState(0)

  function Counting() {
    setCount(count + 1)
  }

  function Counting2() {
    setCount2(count2 + 1)
  }

  // 1️⃣ Without dependency (runs every render)
  useEffect(() => {
    console.log("Without Dependency", count)
  })

  // 2️⃣ With dependency (runs when count changes)
  useEffect(() => {
    if (count === 10) {
      alert("Count is 10")
    }
  }, [count])

  // 3️⃣ Empty dependency (runs only once)
  // useEffect(() => {
  //   console.log("Runs only once")
  // }, [])

  return (
    <div>
      <button onClick={Counting}>Count</button>
      <button onClick={Counting2}>Count2</button>
      <br />
      Count 1: {count}
      <br />
      Count 2: {count2}
    </div>
  )
}

📌 useEffect Summary Table
Type	Dependency	Runs When
Without Dependency	None	Every render
With Dependency	[state]	State changes
Empty Array	[]	Only once




📅 Date: 11 January 2026

This session focused on **API integration, data binding, Props, and Bootstrap usage in React JS**.

---

## 🔹 API Call in React

- Calling an API using the **Fetch method**
- Storing API response in **React state**
- Passing API data from parent to child components using **Props**
- Displaying API data dynamically in a **table**

---

## 🔹 Form Data Binding

- Binding form input fields using `useState`
- Handling form submission
- Passing form data to other components using **Props**
- Displaying submitted form data in a **table**

---

## 🔹 Table Binding (Combined Data)

- Combining **Form Data** and **API Data**
- Sending combined data to a table component via **Props**
- Rendering dynamic table rows using Props and `map()`

---

## 🔹 Props in React

- Understanding what **Props** are and why they are used
- **Parent-to-child data transfer**
- Making components **reusable and dynamic** using Props

---

## 🔹 Bootstrap in React

- Adding Bootstrap to a React project
- Using Bootstrap classes for **forms and tables**
- Types of Bootstrap usage in React:
  - **CDN**
  - **NPM Bootstrap**
  - **React-Bootstrap**

---

## ✅ Key Learnings

- Proper component structure in React
- Efficient data transfer using Props
- Handling and displaying dynamic data
- Styling React components using Bootstrap
