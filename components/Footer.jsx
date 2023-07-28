

const Footer = () => {
  return (

    <>
      <div className="text-white text-center p-1 bg-slate-900">
        <div className="flex justify-center my-2">
          <a href="https://github.com/Zcordeiro" target="_blank" rel="noreferrer">
            <img src="/images/logo/github.png" alt="Featured" className="w-10 h-10 mx-4 hover:animate-bounce" />
          </a>
          <a href="https://www.linkedin.com/in/zeus-cordeiro/" target="_blank" rel="noreferrer">
            <img src="/images/logo/linkedin.png" alt="Featured" className="w-10 h-10 mx-4 hover:animate-bounce" />
          </a>
          <a href="mailto:zcordeiro@gmail.com" target="_blank" rel="noreferrer">
            <img src="/images/logo/email.png" alt="Featured" className="w-10 h-10 mx-4 hover:animate-bounce" />
          </a>
        </div>

        <p className="italic text-xs"> Zeus Cordeiro © 2023 </p>

        <p className="mt-1 text-xs">Website by <a className="text-blue-300 underline" href="https://www.zeuscordeiro.com/">Zeus⚡Codes</a> </p>
      </div>
    </>
  )
}

export default Footer