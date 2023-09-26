export function processJobDescription(job_description) {
  let lines = job_description.split('\n');

  let role = [];
  let requirements = [];
  let benefits = [];

  let currentSection = '';

  for (let line of lines) {
    if (line.includes('Role and Responsibilities:')) {
      currentSection = 'role';
      continue;
    } else if (line.includes('Requirements:')) {
      currentSection = 'requirements';
      continue;
    } else if (line.includes('Benefits:')) {
      currentSection = 'benefits';
      continue;
    }

    if (currentSection === 'role') {
      role.push(line.trim());
    } else if (currentSection === 'requirements') {
      requirements.push(line.trim());
    } else if (currentSection === 'benefits') {
      benefits.push(line.trim());
    }
  }

  return {
    role: role,
    requirements: requirements,
    benefits: benefits,
  };
}
