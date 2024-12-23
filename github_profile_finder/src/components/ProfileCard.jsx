import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <img
        src={profile.avatar_url}
        alt={profile.name}
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold text-center mt-4">
        {profile.name || profile.login}
      </h2>
      <p className="text-center text-gray-600">
        {profile.bio || "No bio available"}
      </p>
      <p className="text-center text-gray-600">
        Joined: {new Date(profile.created_at).toDateString()}
      </p>

      <div className="flex justify-around mt-4">
        <div className="text-center">
          <h4 className="font-bold">Followers</h4>
          <p>{profile.followers}</p>
        </div>
        <div className="text-center">
          <h4 className="font-bold">Following</h4>
          <p>{profile.following}</p>
        </div>
        <div className="text-center">
          <h4 className="font-bold">Public Repos</h4>
          <p>{profile.public_repos}</p>
        </div>
      </div>

      <div className="mt-6">
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
