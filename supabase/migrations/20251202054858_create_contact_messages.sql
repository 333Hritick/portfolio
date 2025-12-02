/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, required) - Name of the person sending the message
      - `email` (text, required) - Email address of the sender
      - `message` (text, required) - The message content
      - `created_at` (timestamptz) - Timestamp when the message was sent

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy to allow anyone to insert messages (public contact form)
    - No read policies needed as this is for admin use only
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can send contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);