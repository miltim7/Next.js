let cars = [];

export async function GET() {
    return new Response(JSON.stringify(cars), { status: 200 });
}

export async function POST(req) {
    const data = await req.json();
    cars.push({ ...data, id: Date.now().toString() });
    return new Response(JSON.stringify({ message: "Car added successfully" }), { status: 201 });
}

export async function PUT(req) {
    const data = await req.json();
    const index = cars.findIndex((car) => car.id === data.id);
    if (index !== -1) {
        cars[index] = data;
        return new Response(JSON.stringify({ message: "Car updated successfully" }), { status: 200 });
    }
    return new Response(JSON.stringify({ error: "Car not found" }), { status: 404 });
}

export async function DELETE(req) {
    const { id } = await req.json();
    cars = cars.filter((car) => car.id !== id);
    return new Response(JSON.stringify({ message: "Car deleted successfully" }), { status: 200 });
}
