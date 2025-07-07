import Lottie from "react-lottie";
import recordAnimation from "./record_animation.json"

function RecordingAnimation() {
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: recordAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      return (
        <div>
          <Lottie
            options={defaultOptions}
            height={75}
            width={75}
          />
        </div>
      );
    }
export default RecordingAnimation;