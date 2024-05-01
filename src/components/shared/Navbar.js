"use client"
import { Anchor } from "antd";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          padding: "20px",
        }}
      >
        <Anchor
          direction="horizontal"
          items={[
            {
              key: "login",
              href: "#login",
              title: "Login",
            },
            {
              key: "projects",
              href: "#projects",
              title: "Projects",
            },
            {
              key: "task-management",
              href: "#task-management",
              title: "Task Management",
            },
          ]}
        />
      </div>
      <div>
        <div
          id="login"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            background: "rgba(0,255,0,0.02)",
          }}
        />
        <div
          id="projects"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            background: "rgba(0,0,255,0.02)",
          }}
        />
        <div
          id="task-management"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            background: "#FFFBE9",
          }}
        />
      </div>
    </>
  );
};

export default Navbar;
