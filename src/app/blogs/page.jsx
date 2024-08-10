import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  return (
    <div className="p-24">
      {blogs.map((blog) => (
        <div key={blog._id} className="border-2 p-12 m-3">
          <h3> {blog.author} </h3>
          <h3> {blog.title} </h3>
          <button className="btn m-4 btn-primary">
            <Link href={`/blogs/${blog._id}`}>view details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

const blogs = [
  {
    _id: "afsdhff768s7d6sd7f7s86sd",
    title: "Understanding JavaScript Closures",
    content:
      "JavaScript closures are a fundamental concept that allows functions to have access to variables from an enclosing scope or environment.",
    author: "John Doe",
    date: "2024-08-01",
  },
  {
    _id: "jkfghj68sd7f6sd87f6s8fsd",
    title: "A Guide to Responsive Web Design",
    content:
      "Responsive web design is an approach that makes web pages render well on a variety of devices and window or screen sizes.",
    author: "Jane Smith",
    date: "2024-07-21",
  },
  {
    _id: "cvxery768s7d6sd7f7s86asf",
    title: "Getting Started with React Hooks",
    content:
      "React Hooks are functions that let you use state and other React features in function components.",
    author: "Michael Johnson",
    date: "2024-06-15",
  },
  {
    _id: "qweasdz768s7d6sd7f7s86qw",
    title: "Understanding CSS Grid Layout",
    content:
      "CSS Grid Layout is a two-dimensional layout system for the web that allows you to create complex layouts more easily.",
    author: "Emily Davis",
    date: "2024-05-12",
  },
  {
    _id: "bvcxzrw768s7d6sd7f7s86tr",
    title: "An Introduction to Node.js",
    content:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to build scalable network applications.",
    author: "Chris Wilson",
    date: "2024-04-05",
  },
  {
    _id: "poiuytt768s7d6sd7f7s86iu",
    title: "Mastering Asynchronous JavaScript",
    content:
      "Asynchronous JavaScript allows you to handle time-consuming operations like API requests without blocking the main thread.",
    author: "Sarah Lee",
    date: "2024-03-28",
  },
  {
    _id: "lkjhfdd768s7d6sd7f7s86lk",
    title: "The Basics of TypeScript",
    content:
      "TypeScript is a strongly typed superset of JavaScript that adds static types, making it easier to catch errors during development.",
    author: "David Brown",
    date: "2024-02-19",
  },
  {
    _id: "mnbvccx768s7d6sd7f7s86mn",
    title: "Deploying Web Applications with Docker",
    content:
      "Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.",
    author: "Lisa Green",
    date: "2024-01-22",
  },
  {
    _id: "zxcvbbn768s7d6sd7f7s86zx",
    title: "Introduction to GraphQL",
    content:
      "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data.",
    author: "Tom White",
    date: "2024-01-10",
  },
  {
    _id: "wertyyu768s7d6sd7f7s86we",
    title: "Building RESTful APIs with Express.js",
    content:
      "Express.js is a web application framework for Node.js that provides a robust set of features to develop web and mobile applications.",
    author: "Nancy King",
    date: "2023-12-30",
  },
];

export default BlogsPage;
