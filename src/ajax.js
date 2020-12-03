// import axios with configuration
import axios from "./axios";

// ...challenges here

//q1
/* 
axios.get("/articles").then(({ data }) => {
	console.log(data.data);
});
 */
//q2
/* 
axios.post("/articles", {
		title: "new post",
		content: "blah blah blah blah blah",
		tags: ["blah", "blahing"],
	}).then(({ data }) => {
		console.log(data.data.id);
	});
 */
//q3
/* 
axios.get("/articles/82").then(({ data }) => {
	console.log(data.data);
});
 */
//q5
/* 
axios
	.patch("/articles/82", {
		tags: ["blah", "blahing", "fixed tag"],
	})
	.then(({ data }) => {
		console.log(data.data.tags);
	}); 
	*/
