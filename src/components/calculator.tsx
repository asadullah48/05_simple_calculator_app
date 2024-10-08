"use client"; // Enables client-side rendering for this component

// Import necessary hooks from React
import { useState } from "react";

// Import custom UI components from the UI directory
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Default export of the CalculatorComponent function
export default function CalculatorComponent() {
  // State hooks for managing input numbers and the result
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [activeInput, setActiveInput] = useState<"num1" | "num2">("num1");
  const [result, setResult] = useState<string>("");

  // Handler for updating num1 or num2 based on the active input
  const handleNumberClick = (value: string): void => {
    if (activeInput === "num1") {
      setNum1((prev) => prev + value);
    } else {
      setNum2((prev) => prev + value);
    }
  };

  // Function to perform addition and set the result
  const add = (): void => {
    setResult((parseFloat(num1) + parseFloat(num2)).toString());
  };

  // Function to perform subtraction and set the result
  const subtract = (): void => {
    setResult((parseFloat(num1) - parseFloat(num2)).toString());
  };

  // Function to perform multiplication and set the result
  const multiply = (): void => {
    setResult((parseFloat(num1) * parseFloat(num2)).toString());
  };

  // Function to perform division and set the result
  const divide = (): void => {
    if (parseFloat(num2) !== 0) {
      setResult((parseFloat(num1) / parseFloat(num2)).toString());
    } else {
      setResult("Error: Division by zero");
    }
  };

  // Function to clear the inputs and result
  const clear = (): void => {
    setNum1("");
    setNum2("");
    setResult("");
    setActiveInput("num1");
  };

  // JSX return statement rendering the calculator UI
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      {/* Center the calculator within the screen */}
      <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        {/* Card header with title */}
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Simple Calculator
          </CardTitle>
        </CardHeader>
        {/* Card content including inputs, buttons, and result display */}
        <CardContent className="space-y-4">
          {/* Input fields for numbers */}
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-2 w-1/2">
              <Label htmlFor="num1" className="text-purple-500">Number 1</Label>
              <Input
                id="num1"
                type="text"
                value={num1}
                placeholder="Click numbers"
                readOnly
                onClick={() => setActiveInput("num1")}
                className={`cursor-pointer bg-purple-100 border-2 border-purple-500 rounded-md shadow-md ${activeInput === "num1" ? "ring-2 ring-purple-500" : ""}`}
              />
            </div>
            <div className="flex flex-col space-y-2 w-1/2">
              <Label htmlFor="num2" className="text-blue-500">Number 2</Label>
              <Input
                id="num2"
                type="text"
                value={num2}
                placeholder="Click numbers"
                readOnly
                onClick={() => setActiveInput("num2")}
                className={`cursor-pointer bg-blue-100 border-2 border-blue-500 rounded-md shadow-md ${activeInput === "num2" ? "ring-2 ring-blue-500" : ""}`}
              />
            </div>
          </div>
          {/* Number pad */}
          <div className="grid grid-cols-3 gap-4">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".","Asad"].map((number) => (
              <Button
                key={number}
                variant="outline"
                className="text-2xl font-bold text-gray-700 dark:text-gray-300"
                onClick={() => handleNumberClick(number)}
              >
                {number}
              </Button>
            ))}
          </div>
          {/* Buttons for arithmetic operations */}
          <div className="grid grid-cols-4 gap-3">
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-100 bg-purple-500 hover:bg-purple-600"
              onClick={add}
            >
              +
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-100 bg-blue-500 hover:bg-blue-600"
              onClick={subtract}
            >
              -
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-100 bg-green-500 hover:bg-green-600"
              onClick={multiply}
            >
              *
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-100 bg-red-500 hover:bg-red-600"
              onClick={divide}
            >
              /
            </Button>
          </div>
          {/* Display the result */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="result" className="text-pink-500">Result</Label>
            <Input
              id="result"
              type="text"
              value={result}
              placeholder="Result"
              readOnly
              className="bg-pink-100 border-2 border-pink-500 rounded-md shadow-md"
            />
          </div>
          {/* Clear button to reset inputs and result */}
          <Button
            variant="outline"
            className="w-full text-xl font-bold bg-gray-200 hover:bg-gray-300 text-gray-800"
            onClick={clear}
          >
            Clear
          </Button>
        </CardContent>
      </Card>
      <div>
        <h6>Created By Asadullah Shafique</h6>
        <h5>Roll # 00458550</h5>
      </div>
    </div>
  );
}
