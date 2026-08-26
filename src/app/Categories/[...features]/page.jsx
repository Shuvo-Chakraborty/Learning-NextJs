export default async function CategoriesDetailsPage({ params }) {
    const { features } = await params;

    console.log({ features }); // এখানে দেখতে পারবেন URL থেকে কী আসছে

    if (features.length === 3) {
        return (
            <div>
                {features[2]}
            </div>
        );
    }
    //  if (features.length === 2) {
    //     return (
    //         <div>
    //             {features[1]}
    //         </div>
    //     );
    // }

    if (features.length === 2) {
        return (
            <div>
                <p>Category: {features[0]}</p>
                <p>Sub-feature: {features[1]}</p>
            </div>
        );
    }

    return (
        <div className="h-screen">
            Categories Details
        </div>
    );
}