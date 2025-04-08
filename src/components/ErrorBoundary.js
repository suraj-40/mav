// src/components/ErrorBoundary.jsx
import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(`Error caught in ${this.props.componentName}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-500">
          <h2>Something went wrong in {this.props.componentName}.</h2>
          <p>{this.state.error?.message || "An error occurred."}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;