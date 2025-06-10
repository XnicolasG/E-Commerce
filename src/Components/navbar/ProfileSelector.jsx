// import React from 'react'

import { useContext, useState } from "react"
import { CartContext } from "../../Context/ContextProvider";
import guestImg from "../../img/guest1.webp";
import user1Img from "../../img/user1.webp";
import user2Img from "../../img/user2.webp";



export const ProfileSelector = () => {
    const { state, updateUserProfile } = useContext(CartContext)
    const [isOpen, setIsOpen] = useState(false)
   const profileImages = {
        guest: guestImg,
        user1: user1Img,
        user2: user2Img
    };

    const availableProfiles = ['guest',"user1", "user2"];
    console.log(state?.user?.profile);
    
    
    return (
        <section
        onClick={() => setIsOpen(!isOpen)}
        className="relative inline-block">
            {/* Imagen de perfil actual */}
            <img
                src={profileImages[state.user?.profile.name]}
                alt={state.user.profile.name}
                className="size-11 rounded-full border-2 border-gray-300 cursor-pointer hover:border-gray-500 transition-all"
            />

            {/* Isla flotante con perfiles disponibles */}
            {isOpen  && (
                <div
                    className="absolute top-full -right-4 mt-2 w-40 bg-white rounded-lg shadow-lg flex flex-col p-2"
                >
                    {availableProfiles.filter(profile => profile !== state.user.profile.name ).map((profile) => {
                        console.warn(profile);
                        return (
                        <button
                            key={profile}
                            className="flex items-center gap-2 p-2 hover:bg-sky-400 rounded transition-all"
                            onClick={() => updateUserProfile(profile)}
                        >
                            <img
                                src={profileImages[profile]}
                                alt={profile}
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm text-black font-semibold">{profile}</span>
                        </button>
                    )})}
                </div>
            )}
        </section>
    );

}
