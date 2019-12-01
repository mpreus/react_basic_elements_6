const PromptFunc = () => {
  	let a = parseFloat(prompt("Enter first number"));
	let b = parseFloat(prompt("Enter another number"));
	let result = a + b;

	if (isNaN(result)) {
		return ( <h2>You have not entered proper numbers!</h2> )
	}
	return <h2>Addition of your numbers gives: {result}</h2>;
}

ReactDOM.render(			
  	<PromptFunc />,  
  	document.getElementById("app")			
);