import { Exercise } from '@/src/types';

const crossfitExercises: Exercise[] = [
  {
    id: 1,
    title: 'Thrusters',
    description: 'Combines a front squat with an overhead press, targeting multiple muscle groups including legs, shoulders, and core.',
    image: 'https://images.unsplash.com/photo-1647438275887-6cf90f1d15f7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://www.youtube.com/watch?v=zqNWSE5ec08',
    linkText: 'Watch Video',
    tags: ['CrossFit', 'Compound', 'Workout'],
    difficulty: 4,
  },
  {
    id: 2,
    title: 'Double-Unders',
    description: 'A jump rope exercise where the rope passes under the feet twice in one jump, improving coordination and cardiovascular endurance.',
    image: 'https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2017/01/Master-the-Double-Under.jpg',
    link: 'https://www.youtube.com/watch?v=h5E9lZtY0j0',
    linkText: 'Watch Video',
    tags: ['CrossFit', 'Cardio', 'Skill'],
    difficulty: 5,
  },
  {
    id: 3,
    title: 'Wall Balls',
    description: 'Involves squatting down with a medicine ball and then launching it up to hit a target on the wall, targeting legs, shoulders, and core.',
    image: 'https://media.istockphoto.com/id/1555667568/photo/muscular-woman-doing-exercise-with-heavy-medicine-ball-in-gym.webp?s=612x612&w=is&k=20&c=u1j69v98LaVRMGRDmA-ESxT7olXMWkLxJaOb7x0DRbE=',
    link: 'https://www.youtube.com/watch?v=zm1KmF0oM5o',
    linkText: 'Watch Video',
    tags: ['CrossFit', 'Strength', 'Functional'],
    difficulty: 2,
  },
  {
    id: 4,
    title: 'Burpees',
    description: 'A full-body exercise that involves dropping to the ground, performing a push-up, and then jumping explosively, targeting multiple muscle groups and improving cardiovascular fitness.',
    image: 'https://media.istockphoto.com/id/1414247906/photo/young-caucasian-woman-doing-burpees-at-the-modern-gym.jpg?s=1024x1024&w=is&k=20&c=QzP2lLU97cump9wX6iwOUYlys3jg2duTFci5eH5P_SM=',
    link: 'https://www.youtube.com/watch?v=JZQA08SlJnM',
    linkText: 'Watch Video',
    tags: ['CrossFit', 'Cardio', 'Bodyweight'],
    difficulty: 2,
  },
  {
    id: 5,
    title: 'Toes-to-Bar',
    description: 'Requires hanging from a bar and bringing the toes up to touch the bar, targeting the core and improving grip strength and flexibility.',
    image: 'https://barbend.com/wp-content/uploads/2021/02/BarBend-Article-Image-760-x-427-38.jpg',
    link: 'https://www.youtube.com/watch?v=j3kVTx3hRV0',
    linkText: 'Watch Video',
    tags: ['CrossFit', 'Core', 'Skill'],
    difficulty: 5,
  },
];

export default crossfitExercises;
