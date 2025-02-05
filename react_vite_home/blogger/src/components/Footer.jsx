import { Instagram, Facebook, Mail, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <div className="flex-grow flex flex-col justify-between p-8 gap-6 text-white bg-black">
            <div className="flex gap-6 justify-around">
                <Instagram />
                <Facebook />
                <Mail />
                <Twitter />
            </div>
            <h1 className="text-center">Copyrighted © 2022</h1>
        </div>
    );
}