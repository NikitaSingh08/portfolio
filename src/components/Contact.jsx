// import { useState } from "react"

// export const Contact =()=>{
//     const formInitialDetails ={
//         Name: "",
//         email: "",
//         phone: "",
//         message: ""

//     }
//     const[formDetails,setFormDetails] = useState(formInitialDetails);
//     const[buttonText, setButtonText] = useState('Send');
//     const[status, setStatus] = useState({});

//     const onFormUpdate = (category, value) => {
//         setFormDetails({
//             ...formDetails,
//             [category]: value
//         })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setButtonText("Sending...");
//         let response = await fetch("http://localhost:5000/contact", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json;charset=utf-8",
//           },
//           body: JSON.stringify(formDetails),
//         });
//         setButtonText("Send");
//         let result = await response.json();
//         setFormDetails(formInitialDetails);
//         if (result.code == 200) {
//           setStatus({ succes: true, message: 'Message sent successfully'});
//         } else {
//           setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//         }
//       };

//     return(
//         <section className="contact" id="contact">
//             <div class="container">
//                 <div class="row">
//                     <div class="col md-6">
//                         <img src = {add-contact} alt="img"></img>
//                     </div>
//                     <div class="col md-6"><h2>Get In Touch</h2></div>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <div class="row">
//                         <div class="col sm-6">
//                             <input type="text" value={formDetails.Name} placeholder="Name" onChange={(e) => onFormUpdate('Name',e.target.value)} />
//                         </div>
//                         <div class="col sm-6">
//                             <input type="email" value={formDetails.email} placeholder="Email_ID" onChange={(e) => onFormUpdate('email',e.target.value)} />
//                         </div>
//                         <div class="col sm-6">
//                             <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone',e.target.value)} />
//                         </div>
//                         <div class="col sm-6">
//                            <textarea rows={6} value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message',e.target.value)}></textarea>
//                            <button type="submit"><span>{buttonText}</span></button>
//                         </div>
//                         {
//                             status.message &&
//                             <div class="col">
//                                 <p className={status.success === false ? "danger":"success"}>{status.message}</p>
//                             </div>
//                         }
//                     </div>
//                 </form>
//             </div>
//         </section>
//     )
// }