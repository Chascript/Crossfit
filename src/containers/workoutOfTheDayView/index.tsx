import WorkoutOfTheDayCard from '../../components/workout-of-the-day';
import wotd from '../../../wotd_response.json';

export const WorkoutOfTheDayView = () => (
  <div className="my-12 mx-10  transition-transform duration-2000">
    <h1 className="text-3xl font-medium mb-4">Workout Of The Day (WOD)</h1>
    <div className="flex flex-col items-center justify-between lg:items-center lg:flex-row-reverse">
      <div className="lg:flex-1 py-4 lg:pl-8">
        <ul className="list-decimal leading-relaxed lg:text-large">
          <li>
            CrossFits WOD is a daily workout that combines varied movements
            at high intensity.
          </li>
          <li>
            It typically includes exercises from weightlifting, gymnastics, cardio, and bodyweight training.
          </li>
          <li>
            WODs are designed to be scalable for different fitness levels, focus on intensity, and promote a sense of community.
          </li>
          <li>
            They vary each day to prevent plateaus and keep workouts challenging and effective.
          </li>
          <li>
            The WOD is a staple of CrossFit training and is a great way to improve your fitness and overall health.
          </li>
        </ul>
      </div>
      <WorkoutOfTheDayCard
        workout={wotd}
      />
    </div>
  </div>
);

export default WorkoutOfTheDayView;
