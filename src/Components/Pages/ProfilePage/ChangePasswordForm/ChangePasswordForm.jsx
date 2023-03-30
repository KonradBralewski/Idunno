import React from "react";

export default function ChangePasswordForm({handleChange, data}){
    return (
        <div className="flex flex-col w-54 border-2 border-black">
            <input type="password" placeholder="Current Password" onChange={handleChange}
                    value={data.currentPassword} name="currentPassword" 
                    className="text-xs tablet:text-sm text-center w-32 tablet:w-36 laptop:w-44"></input>
            <input type="password" placeholder="New Password" onChange={handleChange}
                    value={data.newPassword} name="newPassword" 
                    className="text-xs tablet:text-sm text-center w-32 tablet:w-36 laptop:w-44"></input>
            <input type="password" placeholder="Confirm Password" onChange={handleChange}
                    value={data.confirmNewPassword} name="confirmNewPassword" 
                    className="text-xs tablet:text-sm text-center w-32 tablet:w-36 laptop:w-44"></input>
        </div>
    )
}