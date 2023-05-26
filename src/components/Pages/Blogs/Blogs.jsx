import React from "react";
import { UseTitle } from "../../utils/UseTitle";
const Blogs = () => {
  UseTitle("Blog");
  return (
    <div className=" border-2 mt-20 mb-20">
      <div className=" text-5xl mt-10 text-white text-center font-extrabold">
        Q/A
      </div>
      <div className=" text-white mt-10 lg:p-16 p-2">
        <div>
          <div className=" text-2xl font-bold">
            Question: What is an access token and refresh token? How
            do they work and where should we store them on the
            client-side?
          </div>
          <div className="py-5 ">
            <span className="underline">Answer: </span>
            <div>
              <span className=" text-bold">Access tokens</span> are
              short lived credentials that is used to authorize an
              user to a specific private components or routes. Usually
              its provided by the authentication server.
              <br />
              <br />
              <span className=" text-bold">Refresh tokens</span> are
              long lived credentials provided by the authentication
              server for the recovery of the access tokens.
              <br />
              <br />
              In the client side normally we can store them in
              httponly cookies, local or memory or session storage
            </div>
          </div>
        </div>
        <div>
          <div className=" text-2xl font-bold">
            Question: Compare SQL and NoSQL databases?
          </div>
          <div className="py-5">
            {" "}
            <span className=" underline">Answer:</span>{" "}
            <div className="pt-2">
              <div className=" overflow-x-scroll">
                <table className="table-normal border-2 pt-2 text-center rounded">
                  <thead>
                    <tr className="border-2">
                      <th className=" text-2xl border-2">SQL</th>
                      <th className=" text-2xl">NoSQL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-2 ">
                      <td className="border-2">
                        SQL = Structured Query Language{" "}
                      </td>
                      <td>NoSQL = Not only SQL</td>
                    </tr>
                    <tr className="border-2 ">
                      <td className="border-2 ">
                        It uses SQL queries like select, insert,
                        update, delete, join to work with the SQL
                        database{" "}
                      </td>
                      <td>
                        It uses multiple types of query language for
                        working with the database like MONGODB uses
                        BSON query, GRAPHQL uses graph based language.
                        the method are get, put,patch,post etc
                      </td>
                    </tr>
                    <tr className="border-2 ">
                      <td className="border-2">
                        SQL are scaled vertically that uses lots of
                        power from CPU and Memory
                      </td>
                      <td>
                        NoSQL are scaled horizontally and can be used
                        accorss multiple servers with huge amout of
                        data
                      </td>
                    </tr>
                    <tr className="border-2 ">
                      <td className="border-2 ">
                        SQL support ACID(Atomicity, Consistancy,
                        Isolation,Durability) propertise. that means
                        all or nothing for the data consistancy
                      </td>
                      <td>
                        NoSQL supports CAP (Consistancy, Availability,
                        Partition Tolerance). where it is focused on
                        high availability with partition tollerance
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" text-2xl font-bold">
            Question: What is express js? What is Nest JS ?{" "}
          </div>
          <div className="py-5">
            <span className=" underline">Answer:</span>{" "}
            <div>
              <span className=" font-bold"> Express js:</span>
              is a web framework for node.js. It provides simple and
              flexible utilities for backend web development. its
              simple, lightweight and well structured. Key features of
              this framework is routing, middlewares, template
              engines, middleware packages
              <br />
              <br />
              <span className=" font-bold"> Nest js:</span> is
              prograssive web framework for server side apps based on
              scalability and maintability. It promotes MVC(Model
              ,view, Controller ) achitecture. Key features are
              decorators, depedancy injection, modules and providers,
              scalabilty
            </div>
          </div>
        </div>
        <div>
          <div className=" text-2xl font-bold">
            Question: What is MongoDB aggregate and how does it work ?
          </div>
          <div className="py-5">
            <span className=" underline">Answer:</span>{" "}
            <div>
              {" "}
              MongoDB aggregate is a framework for advanced data
              processing and analysis . It allows to perform complex
              queries ,aggregation,comutation of data collection.
              <br />
              <br />
              MongoDB aggregate defines the pipeline stages where each
              stage has some specific operation for the data and
              produces result for next stage. Each stage has its own
              way of processing data. the last stage is the final
              result of the aggregation operation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
