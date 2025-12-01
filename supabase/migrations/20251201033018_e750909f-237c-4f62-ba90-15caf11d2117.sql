-- Create table for mailing list signups
CREATE TABLE public.mailing_list (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.mailing_list ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public signup form)
CREATE POLICY "Anyone can sign up for mailing list" 
ON public.mailing_list 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading (privacy protection)
CREATE POLICY "Only authenticated admins can view signups" 
ON public.mailing_list 
FOR SELECT 
USING (false);

-- Create index on email for faster lookups
CREATE INDEX idx_mailing_list_email ON public.mailing_list(email);