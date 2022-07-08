import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Button from "../../components/button/Button";
import logo from "../../logo.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const { password } = watch();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });
  return (
    <div className="h-full flex items-center justify-center bg-gray-100">
      <div className="mx-4 shadow-xl px-5 py-8 rounded-lg bg-white">
        <form onSubmit={onSubmit}>
          <div>
            <img
              src={logo}
              className="w-32 -mt-20 mx-auto animate-spin"
              style={{ animationDuration: "4000ms" }}
              alt=""
            />
          </div>
          <div className="my-5">
            <div className="input-control">
              <FaUserAlt
                className={`left-element ${
                  errors.username ? "!text-red-500" : ""
                }`}
              />
              <input
                type="text"
                className=""
                placeholder="username"
                {...register("username", { required: "username is required" })}
              />
            </div>
            {errors.username && (
              <div className="error-element">{errors.username.message}</div>
            )}
          </div>

          <div className="my-5">
            <div className="input-control">
              <FaLock
                className={`left-element ${
                  errors.password ? "!text-red-500" : ""
                }`}
              />
              <input
                type={showPassword ? "text" : "password"}
                className=""
                placeholder="password"
                {...register("password", { required: "password is required" })}
              />
              {!showPassword && (
                <AiFillEyeInvisible
                  className="right-element"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
              {showPassword && (
                <AiFillEye
                  className="right-element"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            {errors.password && (
              <div className="error-element">{errors.password.message}</div>
            )}
          </div>

          <div className="my-5">
            <div className="input-control">
              <FaLock
                className={`left-element ${
                  errors.confirmPassword ? "!text-red-500" : ""
                }`}
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                className=""
                placeholder="confirm password"
                {...register("confirmPassword", {
                  required: "confirm password",
                  validate: (value) =>
                    value == password || "password not matched",
                })}
              />
              {!showConfirmPassword && (
                <AiFillEyeInvisible
                  className="right-element"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              )}
              {showConfirmPassword && (
                <AiFillEye
                  className="right-element"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              )}
            </div>
            {errors.confirmPassword && (
              <div className="error-element">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          <div>
            <Button className="w-full" disabled={!isValid}>
              Register
            </Button>
          </div>

          <div className="text-sm text-center mt-4">
            already have an account ?{" "}
            <Link to="/login" className="text-primary">
              Please Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
