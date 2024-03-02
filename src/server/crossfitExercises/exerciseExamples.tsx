import { Exercise } from '@/src/types';

export const crossfitExercises: Exercise[] = [
  {
    id: 1,
    title: 'Thruster',
    description: 'Combines a front squat with an overhead press, targeting multiple muscle groups including legs, shoulders, and core.',
    image: 'https://images.unsplash.com/photo-1647438275887-6cf90f1d15f7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'thruster',
    tags: ['CrossFit', 'Compound', 'Workout'],
    difficulty: 4,
    movement: {
      description: 'Thrusters combine a front squat with an overhead press in one fluid movement. This exercise is highly functional, as it mimics real-world movements like lifting objects from the ground and pressing them overhead. It improves strength, power, and coordination.',
      purpose: 'The purpose of thrusters is to build full-body strength, improve cardiovascular conditioning, and enhance functional movement patterns.',
      benefits: ['Builds strength in legs, shoulders, and core', 'Improves power and explosiveness', 'Enhances cardiovascular endurance'],
      commonUsage: 'Thrusters are commonly used in CrossFit workouts, often as part of high-intensity interval training (HIIT) or as a standalone strength exercise.',
    },
    stepByStepGuide: {
      instructions: [
        'Start with the barbell resting on your shoulders, with your feet shoulder-width apart and toes slightly turned out.',
        'Perform a front squat by bending your knees and lowering your hips until your thighs are parallel to the ground.',
        'As you stand up from the squat, simultaneously push the barbell overhead, extending your arms fully.',
        'Lower the barbell back to your shoulders and repeat the movement for the desired number of repetitions.',
      ],
      tips: ['Maintain a straight back throughout the movement', 'Keep your elbows up and in front of the barbell', 'Engage your core muscles to stabilize your spine'],
      images: ['https://example.com/step1.jpg', 'https://example.com/step2.jpg', 'https://example.com/step3.jpg', 'https://example.com/step4.jpg'],
    },
    muscleGroupsWorked: {
      primaryMuscleGroups: ['Quadriceps', 'Glutes', 'Deltoids'],
      secondaryMuscleGroups: ['Hamstrings', 'Calves', 'Triceps', 'Core'],
      description: 'Thrusters primarily target the quadriceps, glutes, and deltoids. These muscles work together to perform the movement, with the quadriceps extending the knees, the glutes extending the hips, and the deltoids pressing the weight overhead. Secondary muscle groups such as the hamstrings, calves, triceps, and core also contribute to stabilizing the body and assisting in the movement.',
    },
    commonMistakes: [
      'Allowing the knees to cave inward during the squat portion of the movement, which can lead to knee injury. Ensure that the knees track over the toes throughout the movement.',
      'Rounding the back or arching excessively during the overhead press, which can strain the lower back. Keep the spine neutral and engage the core muscles for stability.',
      'Using excessive momentum or bouncing out of the bottom of the squat, which reduces the effectiveness of the exercise and increases the risk of injury. Control the movement with smooth, controlled reps.',
    ],
    scalingOptions: [
      'Reduce the weight of the barbell or use dumbbells or kettlebells instead to decrease the intensity of the exercise.',
      'Perform the movement without weights to focus on form and technique, especially for beginners or those recovering from injury.',
      'Break the exercise into separate components (front squats and overhead presses) and gradually progress to performing the full thruster movement.',
    ],
    safetyTips: [
      'Warm up adequately before starting the exercise to prepare your muscles and joints for the workload.',
      'Choose a weight that challenges you but allows you to maintain proper form throughout the exercise.',
      'Listen to your body and stop immediately if you experience any sharp pain or discomfort.',
      'Consult with a certified CrossFit coach or fitness professional for personalized guidance and instruction.',
    ],
    sampleWorkout: {
      title: 'Full-Body Thruster Circuit',
      description: 'Incorporate thrusters into a full-body workout circuit for a challenging and effective training session.',
      steps: [
        'Complete 3 sets of 10 thrusters with a moderate weight, resting 1 minute between sets.',
        'Superset thrusters with pull-ups or rows for an added upper-body challenge. Aim for 3 sets of 8-10 reps of each exercise.',
        'Finish the workout with a 5-minute cooldown of stretching and mobility exercises to promote recovery.',
      ],
    },
  },
  {
    id: 2,
    title: 'Double-Under',
    description: 'A jump rope exercise where the rope passes under the feet twice in one jump, improving coordination and cardiovascular endurance.',
    image: 'https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2017/01/Master-the-Double-Under.jpg',
    link: 'double-under',
    tags: ['CrossFit', 'Cardio', 'Skill'],
    difficulty: 5,
    movement: {
      description: 'Double-unders involve jumping rope while making two passes of the rope for every jump. It requires coordination, timing, and endurance.',
      purpose: 'The purpose of double-unders is to improve cardiovascular endurance, coordination, agility, and foot speed.',
      benefits: ['Enhances cardiovascular fitness', 'Improves coordination and timing', 'Increases agility and foot speed'],
      commonUsage: 'Double-unders are commonly included in CrossFit workouts and jump rope training routines as a high-intensity cardio exercise.',
    },
    stepByStepGuide: {
      instructions: [
        'Hold the jump rope handles in each hand, with the rope behind you.',
        'Swing the rope overhead and jump off the ground, timing the jump to allow the rope to pass under your feet twice before landing.',
        'Keep your elbows close to your sides and wrists relaxed, using your wrists to rotate the rope.',
        'Land softly on the balls of your feet and maintain a slight bend in your knees to absorb the impact.',
      ],
      tips: ['Maintain a consistent rhythm and timing throughout the exercise', 'Practice singles (regular jump rope) before attempting double-unders', 'Focus on keeping the rope spinning smoothly with minimal wrist movement'],
      images: ['https://example.com/double-under-step1.jpg', 'https://example.com/double-under-step2.jpg', 'https://example.com/double-under-step3.jpg', 'https://example.com/double-under-step4.jpg'],
    },
    muscleGroupsWorked: {
      primaryMuscleGroups: ['Calves', 'Quadriceps', 'Hamstrings'],
      secondaryMuscleGroups: ['Shoulders', 'Forearms', 'Core'],
      description: 'Double-unders primarily target the calves, quadriceps, and hamstrings, as these muscles are responsible for jumping and absorbing the impact of each jump. Secondary muscle groups such as the shoulders, forearms, and core are also engaged to stabilize the body and maintain proper form.',
    },
    commonMistakes: [
      'Using too much arm movement instead of relying on wrist flicks to rotate the rope, which can lead to fatigue and inefficient jumping technique.',
      'Jumping too high off the ground, which wastes energy and makes it difficult to maintain a consistent rhythm. Focus on staying light on your feet and using quick, efficient jumps.',
      'Losing focus on timing and rhythm, resulting in missed jumps or tripping on the rope. Practice consistent pacing and timing to improve performance.',
    ],
    scalingOptions: [
      'Practice single unders (regular jump rope) to improve coordination and timing before progressing to double-unders.',
      'Use a heavier or thicker rope to slow down the rotation and make it easier to time the jumps.',
      'Perform double-unders for a set amount of time (e.g., 30 seconds) instead of aiming for a specific number of repetitions.',
    ],
    safetyTips: [
      'Start with a slow and controlled pace to establish proper rhythm and timing before increasing speed.',
      'Wear supportive athletic shoes with cushioning to absorb the impact of jumping and reduce stress on the joints.',
      'Avoid overtraining by gradually increasing the duration or intensity of double-under practice sessions.',
      'Listen to your body and take breaks as needed to prevent fatigue and reduce the risk of injury.',
    ],
    sampleWorkout: {
      title: 'Double-Under Endurance Challenge',
      description: 'Test your double-under skills and cardiovascular endurance with this challenging workout.',
      steps: [
        'Perform as many double-unders as possible in 2 minutes, aiming for smooth and consistent jumps.',
        'Rest for 1 minute, then repeat for a total of 3 rounds.',
        'Record the total number of double-unders completed in each round and track progress over time.',
      ],
    },
  },
  {
    id: 3,
    title: 'Wall Ball',
    description: 'Involves squatting down with a medicine ball and then launching it up to hit a target on the wall, targeting legs, shoulders, and core.',
    image: 'https://media.istockphoto.com/id/1555667568/photo/muscular-woman-doing-exercise-with-heavy-medicine-ball-in-gym.webp?s=612x612&w=is&k=20&c=u1j69v98LaVRMGRDmA-ESxT7olXMWkLxJaOb7x0DRbE=',
    link: 'wall-ball',
    tags: ['CrossFit', 'Strength', 'Functional'],
    difficulty: 2,
    movement: {
      description: 'Wall balls involve squatting down with a medicine ball and then launching it up to hit a target on the wall. It combines elements of strength, power, and accuracy.',
      purpose: 'The purpose of wall balls is to develop lower body strength, explosive power, and cardiovascular endurance.',
      benefits: ['Targets multiple muscle groups including legs, shoulders, and core', 'Improves coordination and balance', 'Enhances functional movement patterns'],
      commonUsage: 'Wall balls are commonly included in CrossFit workouts and functional fitness training routines as a full-body conditioning exercise.',
    },
    stepByStepGuide: {
      instructions: [
        'Stand facing a wall with your feet shoulder-width apart and hold the medicine ball at chest height.',
        'Perform a squat by bending your knees and lowering your hips until your thighs are parallel to the ground.',
        'As you stand up from the squat, use your legs and hips to propel the medicine ball upward towards the target on the wall.',
        'Catch the ball as it rebounds off the wall and immediately descend into the next squat to continue the movement.',
      ],
      tips: ['Maintain a smooth and controlled pace throughout the exercise', 'Focus on driving through the heels to generate power in the squat', 'Keep the chest up and elbows pointed forward to prevent the ball from dropping'],
      images: ['https://example.com/wall-ball-step1.jpg', 'https://example.com/wall-ball-step2.jpg', 'https://example.com/wall-ball-step3.jpg', 'https://example.com/wall-ball-step4.jpg'],
    },
    muscleGroupsWorked: {
      primaryMuscleGroups: ['Quadriceps', 'Glutes', 'Shoulders'],
      secondaryMuscleGroups: ['Hamstrings', 'Calves', 'Core', 'Triceps'],
      description: 'Wall balls primarily target the quadriceps, glutes, and shoulders. The squatting motion engages the lower body muscles, while the overhead throw activates the shoulder muscles. Secondary muscle groups such as the hamstrings, calves, core, and triceps also contribute to stabilizing the body and assisting in the movement.',
    },
    commonMistakes: [
      'Using improper squat form, such as allowing the knees to collapse inward or rounding the lower back, which can lead to injury. Focus on keeping the knees in line with the toes and maintaining a neutral spine throughout the movement.',
      'Failing to fully extend the hips and knees at the top of the squat, resulting in a less powerful throw and reduced effectiveness of the exercise. Ensure full hip and knee extension to maximize power output.',
      'Allowing the ball to drift away from the body during the throw, which can cause loss of control and accuracy. Keep the ball close to the chest and use the momentum from the squat to propel it upward towards the target.',
    ],
    scalingOptions: [
      'Use a lighter medicine ball or decrease the height of the target to make the exercise less challenging.',
      'Perform wall balls with a goblet squat variation, holding the medicine ball at chest level throughout the movement instead of throwing it overhead.',
      'Break the exercise into separate components (squats and wall throws) and focus on mastering each element before combining them into the full wall ball movement.',
    ],
    safetyTips: [
      'Choose an appropriate weight for the medicine ball based on your strength and fitness level to prevent strain or injury.',
      'Maintain proper breathing technique throughout the exercise, exhaling during the squat and inhaling as you stand up and throw the ball.',
      'Allow for adequate rest between sets to prevent fatigue and maintain quality repetitions.',
      'Ensure that the wall and surrounding area are clear of obstructions to avoid accidents or injury from errant throws.',
    ],
    sampleWorkout: {
      title: 'Leg Burner Wall Ball Challenge',
      description: 'Test your lower body strength and endurance with this intense wall ball workout.',
      steps: [
        'Perform 5 sets of 20 wall balls with a challenging weight, resting 1 minute between sets.',
        'Focus on maintaining a consistent pace and hitting the target with each throw for maximum effectiveness.',
        'Finish the workout with a 10-minute cooldown of light cardio and stretching exercises to promote recovery.',
      ],
    },
  },
  {
    id: 4,
    title: 'Burpee',
    description: 'A full-body exercise that involves dropping to the ground, performing a push-up, and then jumping explosively, targeting multiple muscle groups and improving cardiovascular fitness.',
    image: 'https://media.istockphoto.com/id/1414247906/photo/young-caucasian-woman-doing-burpees-at-the-modern-gym.jpg?s=1024x1024&w=is&k=20&c=QzP2lLU97cump9wX6iwOUYlys3jg2duTFci5eH5P_SM=',
    link: 'burpee',
    tags: ['CrossFit', 'Cardio', 'Bodyweight'],
    difficulty: 2,
    movement: {
      description: 'Burpees are a full-body exercise that combines elements of strength, cardio, and plyometrics. It involves several movements performed in quick succession, including a squat, push-up, and jump.',
      purpose: 'The purpose of burpees is to improve cardiovascular fitness, muscular endurance, and total-body conditioning.',
      benefits: ['Targets multiple muscle groups including chest, shoulders, arms, core, and legs', 'Increases heart rate for effective calorie burning and fat loss', 'Enhances agility, coordination, and explosiveness'],
      commonUsage: 'Burpees are commonly used in CrossFit workouts, circuit training, and HIIT workouts as a high-intensity conditioning exercise.',
    },
    stepByStepGuide: {
      instructions: [
        'Start standing with your feet shoulder-width apart and arms at your sides.',
        'Lower into a squat position and place your hands on the ground in front of you.',
        'Jump or step your feet back into a plank position and perform a push-up, lowering your chest to the ground.',
        'Jump or step your feet forward to return to the squat position, then explosively jump into the air with your arms extended overhead.',
        'Land softly and immediately lower back into the squat position to begin the next repetition.',
      ],
      tips: ['Maintain a fast pace to maximize the cardiovascular benefits of the exercise', 'Focus on proper form and technique to prevent injury', 'Modify the exercise as needed by stepping instead of jumping and performing push-ups from the knees if necessary'],
      images: ['https://example.com/burpee-step1.jpg', 'https://example.com/burpee-step2.jpg', 'https://example.com/burpee-step3.jpg', 'https://example.com/burpee-step4.jpg', 'https://example.com/burpee-step5.jpg'],
    },
    muscleGroupsWorked: {
      primaryMuscleGroups: ['Chest', 'Shoulders', 'Arms', 'Quadriceps', 'Core'],
      secondaryMuscleGroups: ['Back', 'Hamstrings', 'Calves'],
      description: 'Burpees target multiple muscle groups, including the chest, shoulders, arms, quadriceps, and core. The explosive jumping motion also engages the back, hamstrings, and calves to propel the body upward. It is a highly effective full-body exercise for improving strength, power, and endurance.',
    },
    commonMistakes: [
      'Rounding the back or sagging the hips during the push-up portion of the exercise, which can lead to lower back strain or injury. Maintain a straight line from head to heels throughout the movement.',
      'Skipping the push-up portion of the burpee or performing half-reps, which reduces the effectiveness of the exercise and cheats you out of the full benefits.',
      'Landing with locked knees or collapsing the chest during the jump, which can increase the risk of joint injury. Land softly with slightly bent knees and absorb the impact with your muscles.',
    ],
    scalingOptions: [
      'Perform modified burpees by stepping back into the plank position instead of jumping, and performing push-ups from the knees if needed.',
      'Reduce the intensity by eliminating the jump at the end of each repetition and focusing on smooth, controlled movements.',
      'Break the exercise into separate components (squats, push-ups, and jumps) and gradually increase the intensity as strength and fitness improve.',
    ],
    safetyTips: [
      'Warm up thoroughly before starting the exercise to prepare your muscles and joints for the workload.',
      'Listen to your body and rest as needed between sets or repetitions to prevent fatigue and maintain quality movement.',
      'Stay hydrated and maintain proper breathing throughout the exercise to support performance and recovery.',
      'Consult with a fitness professional if you have any existing injuries or medical conditions that may affect your ability to perform burpees safely.',
    ],
    sampleWorkout: {
      title: 'Burpee Challenge Circuit',
      description: 'Test your endurance and mental toughness with this challenging burpee circuit workout.',
      steps: [
        'Perform 10 burpees followed by a 200-meter sprint, then rest for 1 minute.',
        'Repeat the circuit for a total of 5 rounds, aiming to maintain a consistent pace and quality repetitions.',
        'Cool down with a light jog or walk and stretching to promote recovery and reduce muscle soreness.',
      ],
    },
  },
  {
    id: 5,
    title: 'Toes-to-Bar',
    description: 'Requires hanging from a bar and bringing the toes up to touch the bar, targeting the core and improving grip strength and flexibility.',
    image: 'https://barbend.com/wp-content/uploads/2021/02/BarBend-Article-Image-760-x-427-38.jpg',
    link: 'toes-to-bar',
    tags: ['CrossFit', 'Core', 'Skill'],
    difficulty: 5,
    movement: {
      description: 'Toes-to-bar is a challenging gymnastics movement that requires hanging from a bar and lifting the feet up to touch the bar. It targets the core muscles and requires strength, flexibility, and coordination.',
      purpose: 'The purpose of toes-to-bar is to strengthen the core muscles, improve grip strength, and enhance overall body control and coordination.',
      benefits: ['Targets the entire core, including the abdominals, obliques, and hip flexors', 'Improves grip strength and forearm endurance', 'Enhances shoulder stability and overhead mobility'],
      commonUsage: 'Toes-to-bar is commonly included in CrossFit workouts, gymnastics training, and functional fitness routines as a challenging core exercise.',
    },
    stepByStepGuide: {
      instructions: [
        'Hang from a pull-up bar with an overhand grip, arms fully extended and feet off the ground.',
        'Engage your core muscles and lift your legs upward, aiming to touch your toes to the bar.',
        'Control the descent back to the starting position, maintaining tension in the core muscles.',
        'Repeat the movement for the desired number of repetitions, focusing on smooth and controlled motion.',
      ],
      tips: ['Maintain a consistent rhythm and breathing pattern throughout the exercise', 'Use momentum from the swing to assist with lifting the legs upward', 'Focus on quality repetitions and full range of motion rather than speed'],
      images: ['https://example.com/toes-to-bar-step1.jpg', 'https://example.com/toes-to-bar-step2.jpg', 'https://example.com/toes-to-bar-step3.jpg', 'https://example.com/toes-to-bar-step4.jpg'],
    },
    muscleGroupsWorked: {
      primaryMuscleGroups: ['Rectus Abdominis', 'Obliques', 'Hip Flexors'],
      secondaryMuscleGroups: ['Forearms', 'Shoulders', 'Latissimus Dorsi'],
      description: 'Toes-to-bar primarily target the rectus abdominis, obliques, and hip flexors, as these muscles are responsible for lifting the legs toward the bar. Secondary muscle groups such as the forearms, shoulders, and latissimus dorsi also contribute to stabilizing the body and assisting in the movement.',
    },
    commonMistakes: [
      'Swinging excessively or using momentum to lift the legs, which reduces the effectiveness of the exercise and increases the risk of injury. Focus on controlled movements and minimize swinging.',
      'Failing to fully engage the core muscles throughout the movement, resulting in incomplete range of motion and reduced muscle activation. Keep the core tight and actively lift the legs toward the bar with each repetition.',
      'Neglecting shoulder and grip strength, which can lead to fatigue and difficulty maintaining proper form. Strengthen the shoulders and grip with targeted exercises to support performance in toes-to-bar.',
    ],
    scalingOptions: [
      'Perform hanging knee raises instead of toes-to-bar to build strength and familiarity with the movement pattern.',
      'Reduce the number of repetitions or modify the range of motion by aiming to bring the knees toward the chest instead of touching the bar.',
      'Use assistance from a spotter or resistance band to support the legs and reduce the load on the core muscles while practicing toes-to-bar.',
    ],
    safetyTips: [
      'Ensure that the pull-up bar is securely mounted and can support your body weight before attempting toes-to-bar.',
      'Start with a gradual progression of exercises to build strength and mobility in the shoulders, core, and grip before attempting toes-to-bar.',
      'Listen to your body and avoid pushing through pain or discomfort, especially in the shoulders, elbows, or wrists. Stop immediately if you experience any sharp pain.',
      'Consult with a qualified coach or fitness professional for personalized instruction and guidance on proper form and technique for toes-to-bar.',
    ],
    sampleWorkout: {
      title: 'Core Crusher Toes-to-Bar Challenge',
      description: 'Test your core strength and grip endurance with this intense toes-to-bar workout.',
      steps: [
        'Perform 5 sets of 8-10 toes-to-bar with controlled form, resting 1-2 minutes between sets.',
        'Superset toes-to-bar with hanging leg raises or planks for an added core challenge. Aim for 3 sets of 10-12 reps of each exercise.',
        'Finish the workout with a 5-minute cooldown of stretching and mobility exercises to promote recovery.',
      ],
    },
  },
];

export default crossfitExercises;
