import { Switch } from "@mui/material";
import Button from "../Components/Button";
import Heading from "../Components/Heading";
import Icon from "../Resources/images/IconGit.png";
import Midheading from "../Components/Midheading";

function Commands(): JSX.Element {
  return (
    <div className="mt-10 ml-8">
      <Heading head={"Commands"} />
      {/* Custom Command */}
      <div className="flex flex-row justify-between mt-4 py-4 px-4 bg-lightbg rounded-lg cursor-default">
        <div className="flex justify-center gap-4 items-center  text-white">
          <img src={Icon} className="h-6 w-6" alt="icn" />
          <div className="">
            <div className="text-xl font-semibold">Custom Commands</div>
            <div className="text-base text-gray-400">
              Create and Manage your own commands
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <Button text={"Create new Command"} route="/custom-command" />
        </div>
      </div>

      {/* Default Command */}
      <div className="flex flex-row justify-between mt-4 py-4 px-4 bg-lightbg rounded-lg cursor-default hover:bg-hoverbg transition-colors">
        <div className="flex justify-center gap-4 items-center  text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6zm4 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1zM7 7a1 1 0 0 0 0 2h.001a1 1 0 0 0 0-2H7zm-1 5a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm1 3a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2H7z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="">
            <div className="text-xl font-semibold">Custom Commands</div>
            <div className="text-base text-gray-400">
              Create and Manage your own commands
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" fill="none" />
            <path
              d="M8.59,27.16,17.75,18,8.59,8.82,11.41,6l12,12-12,12Z"
              transform="translate(-5.59 -6)"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

      {/* Prefix Section */}
      <div className="flex flex-row justify-between mt-4 py-4 px-4 bg-lightbg rounded-lg cursor-default">
        <div className="flex justify-center gap-4 items-center  text-white">
          <div className="">
            <div className="text-2xl font-semibold">Prefixes</div>
            <div className="text-base text-gray-400">
              Put one of the following Prefixes in front of your message to
              execute Bot Commands
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <Button text={"Add prefix"} route="/custom-command" />
        </div>
      </div>

      <div className="mt-8 mb-8 ">
        <Midheading head={"Error Message"} />

        <div className="flex flex-row justify-between mt-4 py-4 px-4 bg-lightbg rounded-lg cursor-default">
          <div className="flex justify-center gap-4 items-center  text-white">
            <div className="">
              <div className="text-2xl font-semibold">Command Not Found</div>
              <div className="text-base text-gray-400">
                Sent when an executed command doesn't exist.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <Switch
              // checked={checked}
              // onChange={handleChange}
              color={"success"}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between mt-4 py-4 px-4 bg-lightbg rounded-lg cursor-default">
          <div className="flex justify-center gap-4 items-center  text-white">
            <div className="">
              <div className="text-2xl font-semibold">Wrong command Usage</div>
              <div className="text-base text-gray-400">
                sent when an existing command is used incorrectly.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <Switch
              // checked={checked}
              // onChange={handleChange}
              color={"success"}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between mt-4 py-4 px-4 bg-lightbg rounded-lg cursor-default">
          <div className="flex justify-center gap-4 items-center  text-white">
            <div className="">
              <div className="text-2xl font-semibold">
                No command Permissions
              </div>
              <div className="text-base text-gray-400">
                sent when an unpermitted user is executing an existing command.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <Switch
              // checked={checked}
              // onChange={handleChange}
              color={"success"}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between mt-4 py-4 px-4 bg-lightbg rounded-lg cursor-default">
          <div className="flex justify-center gap-4 items-center  text-white">
            <div className="">
              <div className="text-2xl font-semibold">Disabled in Channel</div>
              <div className="text-base text-gray-400">
                Sent when an existing command is executed in channels where its
                disabled
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <Switch
              // checked={checked}
              // onChange={handleChange}
              color={"success"}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Commands;
