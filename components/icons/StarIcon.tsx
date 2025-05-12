import { Svg, Path } from "react-native-svg";

type StarIconProps = {
  size?: number;
  color?: string;
  filled?: boolean;
};

export default function StarIcon({ size = 24, color = "currentColor", filled = false }: StarIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : "none"}>
      <Path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
} 