export default function ActionSwitch() {
  let actionItems = [
    {
      item: "Post",
    },
    {
      item: "Replies",
    },
    {
      item: "Highlights",
    },
    {
      item: "Articles",
    },
    {
      item: "Media",
    },
    {
      item: "Likes",
    },
  ];
  return (
    <div className="flex flex-row w-full justify-between">
      {actionItems.map((value,index) => {
        return <div key={`${index}_profile_action_${value}`} className="w-auto p-4 hover:bg-gray-200 w-full">{value.item}</div>;
      })}
    </div>
  );
}
