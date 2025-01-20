import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Viewer from '@/components/viewer'

export default function Home() {
	return (
		<main>
			<Card className='m-4'>
				<CardHeader>
					<CardTitle>Issue can be seen here</CardTitle>
				</CardHeader>
				<CardContent>
					Refresh the page to see the issue. While the viewer is loading, the
					border is a gray (what it should be), but once the viewer is loaded,
					the border is black.
				</CardContent>
			</Card>

			<Viewer />
		</main>
	)
}
