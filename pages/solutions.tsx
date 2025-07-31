import Head from 'next/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>AI Stack Solutions - Dreamplanet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg text-center">
          <CardHeader>
            <CardTitle className="text-3xl">Thanks for your interest!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg mb-6">
              A detailed overview of our AI stack and solutions is coming soon.
            </p>
            <Link href="/" passHref>
              <Button>Return to Homepage</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
