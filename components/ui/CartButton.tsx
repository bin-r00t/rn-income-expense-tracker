import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function CartButton() {
    return <Link href="/cart" className="mr-6 text-black text-lg font-semibold">
        <FontAwesome name="shopping-cart" size={24} color="black" />
    </Link>
}