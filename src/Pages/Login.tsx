function Login() {
  console.log(import.meta.env.VITE_DISCORD_AUTH);
  return (
    <div>
      <a href={`${import.meta.env.VITE_DISCORD_AUTH}`}>
        <div className="text-xl text-white bg-blue-300">Login With Discord</div>
      </a>
    </div>
  );
}

export default Login;
