import { ModeToggle } from "@/components/ui/theme";
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar(){
    return(
        
        <div className="h-16 w-full border-b-2 border-red-700 p-2 sticky inline-flex">
            
                <div className="justify-start inline-flex">
                    <div className="rounded-xl transition-all hover:bg-slate-900  hover:text-red-400 rounded-3xl w-fit p-3 font-mono">
                        <p className="">Home</p>
                    </div>
                    <div className="rounded-xl transition-all hover:bg-slate-900  hover:text-red-400 rounded-3xl w-fit p-3 font-mono">
                        <p className="">Projects</p>
                    </div>
                    <div className="rounded-xl transition-all hover:bg-slate-900  hover:text-red-400 rounded-3xl w-fit p-3 font-mono">
                        <p className="">Contact</p>
                    </div>
                    <div className="rounded-xl transition-all hover:bg-slate-900  hover:text-red-400 rounded-3xl w-fit p-3 font-mono">
                        <p className="">Resume</p>
                    </div>
                </div>
                
                <div className="justify-end inline-flex">
                    <ModeToggle/>
                    <div className="rounded-xl transition-all hover:bg-slate-900  hover:text-red-400 rounded-3xl w-fit p-3 font-mono">
                        <Github/>
                    </div>
                    <div className="rounded-xl transition-all hover:bg-slate-900  hover:text-red-400 rounded-3xl w-fit p-3 font-mono">
                        <Linkedin/>
                    </div>
                </div>
        </div>
    )
}