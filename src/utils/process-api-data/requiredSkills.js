export function requiredSkills(description) {
  const languages = [
    'ES7',
    'JavaScript',
    'React',
    'Typescript',
    'Tailwind',
    'AWS',
    'AG-Grid',
    'HTML5',
    'CSS3',
    'Vue',
    'Angular',
    'Python',
    'Ruby',
    'Rails',
    'Java',
    'C++',
    'C#',
    '.NET',
    'PHP',
    'Laravel',
    'Swift',
    'Objective-C',
    'Kotlin',
    'Flutter',
    'Docker',
    'Node.js',
  ];

  const descriptionWords = description.toLowerCase().split(/\W+/);

  const skills = languages
    .filter(
      (lang) =>
        descriptionWords.includes(lang.toLowerCase()) && lang.length < 10
    )
    .slice(0, 3);

  return skills.map(
    (skill) => skill.charAt(0).toUpperCase() + skill.slice(1).toLowerCase()
  );
}
