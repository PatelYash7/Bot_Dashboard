import axios from "axios";

export const useGetChannels = async () => {
  const Response = await axios.get(
    `http://34.233.124.135/server_Channels_List/?guild=${window.localStorage.getItem(
      "guild_id"
    )}`
  );
  const ChannelArray = Object.entries(Response.data).map(
    ([channel, id]) => ({ channel, id })
  );

  return ChannelArray;
};
