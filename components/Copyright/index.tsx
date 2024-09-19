export default function Copyright() {
    return (
        <>
            <div className="container mt-3 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-[#737373]">
                            © Frontend Mentor Clone - Hiago Roedel - 2024
                        </h1>
                    </div>
                    <div className="flex justify-center md:justify-between space-x-4 text-[#737373]">
                        <a href="#">Terms</a>
                        <a href="#">Cookie Policy</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">License</a>
                    </div>
                </div>
            </div>
        </>
    );
}
