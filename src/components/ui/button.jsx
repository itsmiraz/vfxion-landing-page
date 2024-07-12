/* eslint-disable react/prop-types */
export const Button = ({ children }) => {
    return <button className="bg-[#FFFFFF40] rounded-[9px] px-4 md:min-w-[361px] py-2  md:py-5 text-center text-2xl font-medium">
        {children}
    </button>
}