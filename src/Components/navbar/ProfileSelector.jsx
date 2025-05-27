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
    console.log(profileImages[state.user.profile]);
    
    return (
        <section
        onClick={() => setIsOpen(!isOpen)}
        className="relative inline-block">
            {/* Imagen de perfil actual */}
            <img
                src={profileImages[state.user.profile]}
                alt={state.user.profile}
                className="size-11 rounded-full border-2 border-gray-300 cursor-pointer hover:border-gray-500 transition-all"
                // onMouseEnter={() => setIsOpen(true)}
                // onMouseLeave={() => setTimeout(() => setIsOpen(false), 300)}
            />

            {/* Isla flotante con perfiles disponibles */}
            {isOpen  && (
                <div
                    className="absolute top-full mt-2 w-40 bg-white rounded-lg shadow-lg flex flex-col p-2"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    {availableProfiles.filter(profile => profile !== state.user.profile ).map((profile) => (
                        <button
                            key={profile}
                            className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded transition-all"
                            onClick={() => updateUserProfile(profile)}
                        >
                            <img
                                src={profileImages[profile]}
                                alt={profile}
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm font-semibold">{profile}</span>
                        </button>
                    ))}
                </div>
            )}
        </section>
    );

}
