import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: '1',
    title: 'Gazetter',
    description:
      'Full Stack mobile-friendly interactive map project created and implemented using JavaScript/jQuery (front-end) and PHP (backend). HTML/CSS used for design and structure.',
    image: '/assets/img/GeoMap.png',
    date: '17 July, 2021',
    client: 'IT Career Switch',
    url: 'https://project1.shahrozebilal.co.uk',
  },
  {
    id: '2',
    title: 'Company Directory',
    description:
      'A mobile-first project for building and implementing a directory where users can interact with various tools to add, edit, and delete Personnel, Departments, and Locations. Based on user requirements and utilizing an SQL database.',
    image: '/assets/img/CompanyDirectory.png',
    date: '06 August, 2021',
    client: 'IT Career Switch',
    url: 'https://project2.shahrozebilal.co.uk',
  },
];

export default function PortfolioDetails({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Project Details
          </h2>
          <p className="mb-4">{project.description}</p>
          <ul className="space-y-2">
            <li>
              <strong>Date:</strong> {project.date}
            </li>
            <li>
              <strong>Client:</strong> {project.client}
            </li>
            <li>
              <strong>URL:</strong>{' '}
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                {project.url}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
