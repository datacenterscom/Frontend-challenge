// Character types for Rick & Morty API
// Add your character interfaces here

export interface Character {
  id: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    id: string;
    name: string;
    type: string;
    dimension: string;
  };
  location: {
    id: string;
    name: string;
    type: string;
    dimension: string;
  };
  image: string;
  created: string;
}

// Add more types as needed for your implementation
