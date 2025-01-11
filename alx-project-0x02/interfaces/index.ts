export interface CardProps {
  title: string;
  content: string;
}
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode; // To pass button text or any content inside the button
}

export interface PostProps{
  id:number;
  title: String; 
  content: String;
  userId: number;
}

export interface UserProps{
  id: number;
  name:String;
  email:String;
  address: {
    street: string; // The street address of the user
    city: string; // The city where the user lives
    zipcode: string; // The zipcode of the user's location
  };
}