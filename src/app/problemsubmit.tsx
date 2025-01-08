
import {Textarea, Input} from '@nextui-org/input'

export default function ProblemSubmit() {
    return(
        // TODO: Mobile
        <div className="flex flex-col bg-red-900 w-[500px] h-auto p-10 justify-center items-center gap-3">
            <div className="font-bold text-3xl text-white">
                <a className="text-red-500">Cqnnect</a>&#39;e hoş geldin.
            </div>
            <div>^^ Küçük açıklama buraya</div>
            <div className="text-white">Problem:</div>
            <Textarea id="textbox" className="rounded w-[80%] resize-none" maxLength={1000}></Textarea>
            <div className="text-white">Adınız (paylaşılacak):</div>
            <Input className="w-[80%]"></Input>
            <button className="bg-red-400 rounded p-2 m-2">Gönder gelsin</button>
        </div>
    )
}