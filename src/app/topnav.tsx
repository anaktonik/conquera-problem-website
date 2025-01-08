export default function Topnav() {
    return(
        <div className="topnav bg-[#B40A0A] w-full h-12 flex items-center justify-between">
            <a href="./" className="font-bold text-white m-3 justify-start cursor-grab active:cursor-grabbing">Cqnnect</a>
            <div className="m-2 justify-end items-end content-end">
                <a href="./" className="text-white m-2 cursor-grab active:cursor-grabbing">Takım Hakkında</a>
                <a href="./" className="text-white m-2 cursor-grab active:cursor-grabbing">İletişim</a>
            </div>
        </div>
    )
}