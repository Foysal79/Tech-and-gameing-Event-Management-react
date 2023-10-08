import { FiArrowRight } from "react-icons/fi";
import { GrMapLocation, GrMail,GrPhone } from "react-icons/gr";
const ContactUs = () => {
    return (
        <div className='text-center pt-4 lg:pt-16 w-full mx-auto  p-8 lg:p-11 '>
            
            <h1 className='lg:text-5xl font-extrabold'>CONTACT <span className='text-blue-700'>INFORMATION</span></h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 pt-16 gap-4">
                <div className="col-span-2 lg:w-8/12 mx-auto space-y-5">
                    <h1 className="lg:text-3xl font-bold" >WHERE WE WORK ?</h1>
                    <p >
                    If you have any questions concerning our services or want to schedule an appointment with one of our consultants - please contact us using the details below.
                    </p>
                   <div className="w-8/12 space-y-4 text-left">
                   <div className="flex items-center gap-4 rounded-lg border p-4">
                        <div>
                           <GrMapLocation className="text-4xl" ></GrMapLocation>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Visit our Office:</h3>
                            <p>chittagon 2no gate, bangladesh</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border p-4">
                        <div>
                           <GrMail className="text-4xl" ></GrMail>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Use Contact Form:</h3>
                            <p>Fill in the fields in Contact Form and ask questions you are interested in.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border p-4">
                        <div>
                           <GrPhone className="text-4xl" ></GrPhone>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Call Us:</h3>
                            <p>Don t hesitate to contact us via phones:
                         (123) 456-7891; (123) 456-7892</p>
                        </div>
                    </div>
                   </div>

                </div>
                <div className="space-y-8 rounded-xl p-4 lg:p-10 bg-blue-300 col-span-1 ">
                       <h1 className="text-2xl font-extrabold">Contact Us</h1>
                       <input className="w-full px-6 py-2 rounded-lg" type="text" placeholder="Name" name="" id="" />
                       <br />
                       <input className="w-full px-6 py-2 rounded-lg" type="email" placeholder="Email" name="" id="" />
                       <br />
                       <input className="w-full px-6 py-2 rounded-lg" type="text" placeholder="Email" name="" id="" />
                       <br />
                       <button className=" px-10 lg:px-24 py-3 bg-orange-500 rounded-lg text-xl font-bold text-white" >Send <FiArrowRight></FiArrowRight> </button>
                </div>

            </div>

            </div>
    );
};

export default ContactUs;