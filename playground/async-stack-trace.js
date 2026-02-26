// A low-level async function

// Step 1
async function fetchData() {
  // Simulate an async operation (like fetching from an API)
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });

  // Throw an error after async delay
  throw new Error("Something went wrong in fetchData()");
}

// Step 2: A middle function that calls fetchData
async function processData() {
  await fetchData(); // Wait for fetchData to complete
}

// Step 3: A top-level function that starts everything
async function main() {
  try {
    await processData(); // Call the chain
  } catch (err) {
    // Print the error stack trace
    console.error("Caught error:");
    console.error(err.stack);
  }
}

// Run the program
main();