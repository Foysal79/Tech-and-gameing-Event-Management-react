import Marquee from "react-fast-marquee";

const Sponsors = () => {
    return (
        <div className="text-center pt-4 lg:pt-16 w-8/12 mx-auto">
            <h1 className="text-5xl font-extrabold">OUR <span className="text-blue-700">SPONSORS</span></h1>
            <Marquee speed={30} gradientWidth={200} delay={0} className="mt-10 space-x-10">
            <img className="h-24 w-full " src="https://i.ibb.co/gZF4Knn/png-transparent-digital-bangladesh-logo.png" alt="" /> 
            <img className="h-24 w-full pl-24 " src="https://i.ibb.co/zfjdmGm/hi-tech.png" alt="" />
            <img className="h-24 w-full pl-24 " src="https://i.ibb.co/bHH5tsQ/Grameenphone-Logo-GP-Logo-svg.png" alt="" />
            <img className="h-24 w-full pl-24 " src="https://i.ibb.co/LYsHbcf/png-transparent-mobile-logo-robi-axiata-limited-axiata-group-mobile-phones-bangladesh-airtel-banglad.png" alt="" />
            <img className="h-24 w-full pl-24 " src="https://i.ibb.co/PYZ898C/a2i-bangladesh-logo.png" alt="" />
            <img className="h-24 w-full pl-24 " src="https://i.ibb.co/dpv5dJk/pngtree-mascot-gaming-logo-esport-with-sniper-illustration-image-214812.jpg" alt="" />
            <img className="h-24 w-full pl-24 " src="https://i.ibb.co/KjMjRb6/tech-care-bangladesh-logo-3-C41401604-seeklogo-com.png" alt="" />
            <img className="h-24 w-full pl-24 " src="https://i.ibb.co/cx1JCKR/images.png" alt="" />
            <img className="h-24 w-full pl-24 " src="https://i.ibb.co/cQDK5sd/Epic-Games-Logo.jpg" alt="" />
            <img className="h-24 w-full pl-24 " src="https://i.ibb.co/4N7wH5d/png-transparent-unity-video-game-developer-logo-others.png" alt="" />
            <img className="h-24 w-full pl-24 " src="https://i.ibb.co/K0SqDYR/steam-logo.jpg" alt="" />
          </Marquee>
        </div>
    );
};

export default Sponsors;