-- Add explicit RESTRICTIVE policy to deny public SELECT access to mailing_list
CREATE POLICY "Deny public access" 
ON public.mailing_list 
AS RESTRICTIVE
FOR SELECT 
USING (false);