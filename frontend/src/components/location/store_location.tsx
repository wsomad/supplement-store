const StoreLocation: React.FC = () => {
    return (
        <div className="flex my-20 justify-center items-start">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127486.90503559037!2d103.31467318374138!3d3.8852040589605683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c8bb31c50aef9d%3A0xd1029b2a81c9b51a!2sMusclejets%20Supplement%20Store!5e1!3m2!1sen!2smy!4v1737786227393!5m2!1sen!2smy" 
                width="600" 
                height="450" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="ml-10 bg-background p-4 rounded-sm">
                <h1 className="text-xl font-semibold">Our Store Location</h1>
                <p className="mt-10 font-semibold text-md">Musclejets Supplement Store</p>
                <div className="text-sm mt-2"> 
                <p>A35-G, JLN. IM7/19,</p>
                <p>Bandar Indera Mahkota,</p>
                <p>25200 Kuantan,</p>
                <p>Pahang</p>
                </div>
            </div>
        </div>
    );
}

export default StoreLocation;